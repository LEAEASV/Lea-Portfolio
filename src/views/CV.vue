 <template>

<div class="centerbox">
     <div class="button">
     <a href="https://youtu.be/KLVPXJ4d0ew"><button class="knapfarve">Se mit video CV</button></a>
    </div>
</div>

<div class="centerbox">
    <div class="button">
        <a href="https://www.dropbox.com/home/cv?preview=LeaCV.1+-+Kopi.pdf">
        <button class="knapfarve">Download mit CV</button></a>
    </div>
</div>

    <div class="cv">
    <img src="@/assets/L.CV.png" alt="cv" width="600" height="600">
    </div>
 
 </template>
<script setup>
</script>

<style lang="scss" scoped>


.centerbox {
    display: flex;
    justify-content: center;
}


.knapfarve {
    color:white
}
.button {
  position: relative;
  margin-top: 50px;
  margin-left: 0px!important;

}
.cv{
display: flex;
justify-content: center;
margin-bottom: 50px;
margin-top:50px;
}

</style>