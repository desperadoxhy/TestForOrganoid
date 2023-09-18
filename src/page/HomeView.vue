<template>
  <div style="background:#F8F8F8">
    <div >
      <div class="home">
    <div class="top">
      <div  class="title">DeepKG for COVID-19</div>
      <div class="discript">DeepKG: An End-to-end Deep Learning Based Workflow for </div>
      <div class="discript">Knowledge Graph Extraction, Optimization and Applications</div>
    <div class="downVideo">
      <div class="downIcon"></div>
      <div class="wen">Download user guide</div>
    </div>
    </div>
    <div class="meau">
      <div class="meauItem">
        <div class="meauTitle">Question Answering</div>
        <div class="meauDiscript" style="margin-top: 25px;">The frontend of the QAs can receive a natural language</div>
        <div class="meauDiscript">question entered by users, return the answer information</div>
        <div class="meauDiscript" style="margin-bottom: 50px;">and source information of the question.</div>
        <img src="/img/Q&amp;A on COVID-KG.55e37b46.svg" alt="" class="meauSearch">

      </div>
        <div class="meauItem"><div class="meauTitle">COVID-19 KG</div>
        <div class="meauDiscript" style="margin-top: 25px;">The knowledge graph visualization platform realized the </div>
        <div class="meauDiscript">function of searching entities and relationship and tracing to</div>
        <div class="meauDiscript" style="margin-bottom: 39px;">the source of triplets from literature.</div>
    </div>
        <div class="meauItem">
          <div class="meauTitle">Download</div>
          <div class="meauDiscript" style="margin-top: 25px;">Data of COVID-19 KG Raw, COIVD-19 KG, experts labeled </div>
          <div class="meauDiscript" style="margin-bottom: 39px;">triplets and candidate drug list generated in the DeepKG.</div>
          <img src="/img/Datasets.23a6fe99.svg" alt="" class="meauSearch"></div>
      </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>


.home{
  margin: 0;
  padding: 0;
  min-width: 1700px;
}

.home .top {
  width: 100%;
  padding: 240px 0 350px 0;
  /*background-image: url(../img/homeBackground.99086016.png);*/
  text-align: center;
  color: #fff;
  font-family: Roboto-Bold;
}

.home .top .title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 23px;
}

.home .top .discript {
  font-family: Roboto-Regular;
  font-size: 20px;
  color: #fff;
}

.home .top .downVideo {
  width: 200px;
  margin: 0 auto;
  display: flex;
  cursor: pointer;
  margin-top: 28px;
}

.home .top .downVideo .downIcon {
  width: 22px;
  height: 15px;
  margin-right: 12px;
}

.home .top .downVideo .wen {
  position: relative;
  bottom: 4px;
}

.home .meau {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -265px;
  margin-bottom: 25px;
}

.home .meau .meauItem {
  width: 456px;
  height: 249px;
  background: #fff;
  border-right: 1px solid rgba(0,0,0,.15);
  border-bottom: 1px solid rgba(0,0,0,.15);
  padding: 64px 40px 100px;
}

.home .meau .meauItem .meauTitle {
  font-family: Roboto-Bold;
  font-size: 32px;
  color: #000;
  text-align: center;
  font-weight: 700;
}


.home .meau .meauItem .meauDiscript {
  font-family: Roboto-Regular;
  font-size: 14px;
  color: #404040;
  line-height: 20px;
}

.home .meau .meauItem .meauSearch {
  display: block;
  margin: 0 auto;
}

.home .meau .meauItem .meauLink {
  font-size: 14px;
  color: #000;
  line-height: 20px;
  font-weight: 700;
  padding: 15px 63px;
}


</style>
