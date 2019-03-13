<template>
   <div>
      <MHeader>列表</MHeader>
      <div class="mainContent" ref="scroll" @scroll="loadMore">
          <ul>
              <router-link v-for="book in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="book.bookId" tag="li">
                  <img :src="book.bookCover"/>
                  <div>
                      <h4>{{book.bookName}}</h4>
                      <p>{{book.bookDesc}}</p>
                      <b>{{book.bookPrice}}</b>
                      <div><button @click.stop="remove(book.bookId)">删除</button></div>    
                  </div>
              </router-link>
          </ul>
          <div class="more" @click="getMore">加载更多</div>
      </div>   
   </div>
</template>
<script>
   import MHeader from "../base/MHeader.vue"
   import  {pagination,removeBook}  from "../api/index.js"
   let distance= 0;
   export default {
       data() {
           return {books:[],index:0,hasMore:true}
       },
       created() {
           this.getBooks();
       },
	    mounted() {
			let scroll = this.$refs.scroll;
			let top = scroll.offsetTop;
			scroll.addEventListener("touchstart",(e)=>{
				if(scroll.scrollTop != 0 || scroll.offsetTop != top ) return;
				let start = e.touches[0].pageY;
				let move = (e) =>{
					let current = e.touches[0].pageY;
					distance = current - start; //拉动的距离
					if(distance > 0){
						if(distance <= 50)
						{
							scroll.style.top = top + distance + "px";
						}else{
							scroll.style.top = top + 50 + "px";
						}
					     
					}else
					{
						scroll.removeEventListener("touchmove",move);
						scroll.removeEventListener("touchend",end);
					}
				}
				let end = (e)=>{
					clearInterval(this.timer2);
					this.timer2 = setInterval(()=>{
						if(distance<=0){
							clearInterval(this.timer2);
							distance = 0;
							//获取数据
							this.index = 0;
							this.books = [];
							this.getBooks();
							return ;
						}
						distance -= 1;
						scroll.style.top = top + distance + "px";
					},3);
				}
				scroll.addEventListener("touchmove",move);
				scroll.addEventListener("touchend",end);
			});
		},
       methods: {
		   loadMore(){
			   // scrollTop卷走的高度 clientHeight当前可视区域 scrollHeight盒子真实高度
			   // 触发scroll事件 可能触发很多次 可以进来开启一个定时器 下次触发时可以将
			   // 上次的定时器清楚掉
			   clearTimeout(this.timer);
			   this.timer = setTimeout(()=>{
				   let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll;
				   if(scrollTop + clientHeight + 20 >=scrollHeight){
					   // 请求数据
					   this.getMore();
				   }
			   },30) 
		   },
           getMore() {
               this.getBooks(this.index);
           },
           async getBooks() { // 0~4 5~9 10~15
		   // 有更多数据获取数据
			if(this.hasMore){
				
				let {hasMore,books} = await pagination(this.index);
				this.books = [...this.books,...books];  
				this.hasMore = hasMore;
				
				this.index = this.books.length;
			}           
          },
           async remove(id) {
                await removeBook(id); // 删除某本书
                // 删除前台数据
                this.books = this.books.filter(item=>item.bookId !== id);
           }
       },
       components: {
           MHeader  
       }
   }
</script>
<style scoped>
    .mainContent ul {
        display: flex;
        flex-wrap: wrap;
    }

    .mainContent ul li {
        display: flex;
        
    }

    .mainContent ul h4{
        line-height: 30px;
        height: 30px;
    }

    .mainContent ul b {
        font-size: 20px;
        color: orange;
    }

    .mainContent ul li div {
        padding: 10px 0;
    }

    .mainContent ul li p {
        margin: 10px 0;
    }

    .mainContent button {
        outline: none;
        border: none;
        width: 80px;
        height: 30px;
        border-radius: 8px;
        background: #afd9ee;
        font-size: 18px;

    }

    .mainContent .more {
        margin: 0 10px;
        height: 30px;
        line-height: 30px;
        background: #afd9ee;
        font-size: 20px;
        text-align: center;
    }
</style>
