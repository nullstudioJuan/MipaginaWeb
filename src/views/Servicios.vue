<template >
    
    <div class="container">
        <sequential-entrance fromBottom>
        
            <div class="row">
            
                <div class="col">
                    <h1 class="titulo">Mis Servicios</h1>
                </div>
            
            
            </div>
        </sequential-entrance>
        <br>
        <sequential-entrance fromBottom>
            <div class="row">

                <div class="col">
                    <card-vue :hover="true" :shadow="true">
                        <div slot="header">
                            Despliegue
                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Enim, esse recusandae doloribus modi ratione odio. Reprehenderit 
                            et nihil odit neque ipsum magni officia vero veritatis ab animi 
                            tempore, veniam repellat?
                        </div>
                    </card-vue>
                </div>

                <div class="col">
                    <card-vue :hover="true" :shadow="true">
                        <div slot="header">
                            Diseño
                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Enim, esse recusandae doloribus modi ratione odio. Reprehenderit 
                            et nihil odit neque ipsum magni officia vero veritatis ab animi 
                            tempore, veniam repellat?
                        </div>
                    </card-vue>
                </div>

                <div class="col">
                    <card-vue :hover="true" :shadow="true">
                        <div slot="header">
                            Desarrollo de APIS
                        </div>
                            <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Enim, esse recusandae doloribus modi ratione odio. Reprehenderit 
                            et nihil odit neque ipsum magni officia vero veritatis ab animi 
                            tempore, veniam repellat?
                        </div>
                    </card-vue>
                </div>

            </div>
        </sequential-entrance>
    </div>
</template>

<script>
    import card from '../components/Card';

    export default {
        components:{
            cardVue:card
        }
    }
</script>

<style  scoped>
    
    .titulo {
        text-align: center;
    }

</style>