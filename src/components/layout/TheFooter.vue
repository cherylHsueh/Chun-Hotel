<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="../../assets/logo_footer.svg" alt="logo">
        <h1>不想上班</h1>
      </div>

      <div class="footer-info">
        <ul>
          <li>
            <fa-icon icon="phone-alt"></fa-icon>
            <span>07-536-0000</span>
          </li>
          <li>
            <fa-icon icon="map-marker-alt"></fa-icon>
            <span>香港銅鑼灣星發街1號</span>
          </li>
          <li>
            <fa-icon :icon="['fab','instagram']"></fa-icon>
            <span>I_don't_want_to_work</span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
.footer{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding:20px 0px;
  background-color: #425752;
  color: #fff;
  @include rwd(mobile){
    justify-content: center;
  }
  @include rwd(desktop){
    padding:30px 0px;
  }
}

.footer-content{
  display: flex;
}

.footer-logo{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 100px;
  margin: 0 45px;
  font-size: 12px;
  letter-spacing: 8px;
  img{
    max-width: 50px;
    height: 50px;
    margin: auto;
  }
}

.footer-info{
  max-width: 200px;
  font-size: 12px;
  position: relative;
  &::before{
    content: '';
    display: block;
    width: 1px;
    height: 50%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    bottom: 50%;
    transform: translateY(-50%);
    left: -25px;
  }
  @include rwd(desktop){
    max-width: 250px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;

    text-align: left;
    li{
      width: 100%;
      padding: 5px 0;
      span{
        padding-left: 10px;
      }
    }
  }
}
</style>
