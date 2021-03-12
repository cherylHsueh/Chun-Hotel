<template>
  <div class="container h-srceen-8 d-flex">
    <div class="row">
      <div class="cl-s-12 cl-md-2 cl-xl-2">
        <div class="logo-block">
          <img src="../assets/logo.svg" alt="logo">
        </div>
      </div>

      <div class="cl-s-12 cl-md-8 cl-xl-8 position-relative justify-center">
        <div class="main-block">
          <div class="main-block-pic"></div>
          <span>I don't want to work</span>
        </div>
      </div>

      <div class="cl-s-12 cl-md-2 cl-xl-2">
        <div class="hotelName-block">
          <span>不想</span>
          <span>上班</span>
        </div>
      </div>
    </div>
  </div>

  <div class="slide-block h-srceen-2">
    <div class="slide-block-btn">
      Slide
    </div>
    <img src="../assets/images/arror.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style lang="scss">

.row{
  align-items: center;
  width: 100vw;
  @include rwd(mobile){
    justify-content: center;
  }
}

// 左側logo區塊
.logo-block{
  margin: auto;
  img{
    width: 60px;
  }
}

// 中間首頁圖主區塊
.main-block{
  width: 100%;
  max-width: 640px;
  &-pic{
    width: 100%;
    height: 400px;
    margin: auto;
    background-image: url("../assets/images/rooms/DeluxeSingle/3.jpeg");
    background-size: cover;
    background-position: bottom;
    position:relative;
    @include rwd(desktop){
      height: 640px;
    }
  }
  span{
    display: block;
    width: 100%;
    margin: auto;
    font-size: 30px;
    font-family: 'Dancing Script', cursive;
    letter-spacing: 5px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include rwd(desktop){
      width: unset;
      font-size: 4rem;
      left: 0%;
      right: 0%;
      transform: translate(2%,-50%);
      letter-spacing: 9px;
    }
  }
}

// 右側公司名區塊
.hotelName-block{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  color:$secondary-color;
  position: relative;
  max-width: 50px;
  flex-wrap: wrap;
  @include rwd(mobile){
    max-width: unset;
    flex-wrap: unset;
  }
  span{
    font-size: 36px;
    font-weight: 300;
    letter-spacing: 30px;
    writing-mode: vertical-lr;
    @include rwd(mobile){
      writing-mode: unset;
      letter-spacing: 20px;
    }
  }

  span:first-child::after{
    content: '';
    display: inline-block;
    width: 80%;
    height: 1px;
    top: 45%;
    left: 50%;
    background-color: $secondary-color;
    position: absolute;
    transform: translate(-50%,-50%);
    @include rwd(mobile){
      width: 1px;
      height: 80%;
      top: 50%;
      left: 48%;
    }
}
}

// 下滑按鈕區塊
.slide-block{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &-btn{
    font-family: 'Dancing Script', cursive;
    font-size: 27px;
    color: $secondary-color;
    opacity: .6;
  }
  img{
    position: relative;
    top: 0px;
    max-width: 35px;
    animation: jump .8s infinite;
  }
}

</style>
