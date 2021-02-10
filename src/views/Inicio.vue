<template>
    <div class="content container-fluid">
        <div class="row">
            <div class="titulo">
                <h1>Soy Juan Carlos Herrera Pro</h1>
                
                <h2>Desarrollador Web</h2>
            </div>
        </div>
    </div>
</template>


<style scoped>
    h1{
       
        align-content: center;
        align-items: center;
    }
    h2{
       
        align-content: center;
        align-items: center;
        
    }

    

    @media (min-width: 768px){
        .content{
			background-image: url('https://i.ibb.co/xXRvq0F/pexels-pixabay-270373.jpg');
			background-size: cover;
			resize: both;
			height: 100vh;
			background-size: 100% 100%;
			display: flex;
			background-repeat: no-repeat;
			justify-content: center;
			align-items: center;
		}
    }

	@media (max-width: 767px){
        .content{
			background-image: url('https://i.ibb.co/xXRvq0F/pexels-pixabay-270373.jpg');
			background-size: cover;
			resize: both;
			height: 100vh;
			background-size: 100% 100%;
			display: flex;
			background-repeat: no-repeat;
			justify-content: center;
			align-items: center;
		}
    }    

</style>