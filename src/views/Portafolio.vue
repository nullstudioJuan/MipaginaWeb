<template>
<div class="container">
    <sequential-entrance fromBottom>
        <div class="row">
            <div class="col">
                <h1 class="titulo">Mi Portafolio</h1>
            </div>
        </div>

        <div class="row " >
            <div class="col ">          
                <img src="https://i.ibb.co/PgGq8Xj/merc.png" alt="Avatar" class="image" style="width:100%">
                <div class="middle">
                    <div class="text "> <a class="text" target="_blank" rel="noopener noreferrer" href="http://merc-solutions.com/"> Merc-solutions.com </a> </div>
                </div>
            </div>
        </div>
    </sequential-entrance>
</div>
  
</template>

<script>
    import tabs from '../components/Tabs/Tabs'
    import tabPane from '../components/Tabs/TabPane'
export default {
    components:{
        tabs:tabs,
        tabPane:tabPane

    }
}
</script>

<style  scoped>
    .titulo{
        text-align: center;
    }

.image {
    opacity: 1;
    display: block;
    max-width: 100%;
    min-width: 300px;
    height: auto;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
  color: #000;
}

.container:hover .middle {
  opacity: 1;
  color: #000;
}

.text {
  background-color: #4e4caf;
  color:white;
  
  padding: 1vh 2vh;
}
</style>