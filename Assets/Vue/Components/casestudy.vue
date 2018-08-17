<template>
    <div>
        <div class="card" @click="openCard">
            <div class="client-logo" v-if="result.logo">
                <img :src="result.logo.fields.file.url">
            </div>
            <div class="card-details">
                <h3>{{result.title}}</h3>
                <p>{{result.description}}</p>
            </div>
            <video width="320" height="240" preload="none" controls v-if="result.video">
                <source :src="result.video.fields.file.url" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="video-container" v-html="result.videoEmbed"></div>
            <img :src="result.image.fields.file.url" class="card-image" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'casestudy',
        props: ['result'],
        mounted(){
            console.log(this.result)
        },
        methods: {
            openCard: function(){
                console.warn('this', this)
                let $this = this.$el.firstChild
        
                let cardCloneX = $this.offsetLeft
                let cardCloneY = $this.offsetTop - document.documentElement.scrollTop
                let cardCloneW = $this.offsetWidth
                let cardCloneH = $this.offsetHeight

                let cardClone = $this.cloneNode(true)
                $this.parentNode.appendChild(cardClone)
                
                cardClone.style.top = cardCloneY + 'px'
                cardClone.style.left = cardCloneX + 'px'
                cardClone.style.width = cardCloneW + 'px'
                cardClone.style.height = cardCloneH + 'px'

                document.body.classList.add('has-scroll-disabled')

                setTimeout(function(){
                    cardClone.classList.add('card--active')
                    
                    let $close = document.createElement('div')
                    $close.classList.add('btn-close')
                    $close.innerHTML = `<svg class="icon icon-cross" @click="closeCard"><use xlink:href="#cross"></use></svg>`
                    cardClone.appendChild($close);

                    //after the animation is done, then add the slider
                    if (!!cardClone.querySelectorAll('.single-item').length) {
                        setTimeout(function(){
                            cardClone.classList.add('slider-ready')
                            cardClone.querySelectorAll('.single-item').slick({
                                dots: true
                            });
                        }, 1000)
                    } else if(!!cardClone.querySelectorAll('video').length){
                        setTimeout(function(){
                            let vid = cardClone.querySelectorAll('video')[0]
                            vid.play()
                        }, 500)
                    } else if(!!cardClone.querySelectorAll('iframe').length){
                        console.log('iframe')
                    }

                    $close.addEventListener('click', function(e){
                        $close.remove()

                        //console.warn(cardClone.querySelectorAll('.single-item').slick('slickCurrentSlide'))
                        //let timer = (!!cardClone.querySelectorAll('.single-item').length ? 0 : 500) 

                        let timer = 500

                        //cardClone.querySelectorAll('.single-item').slick('slickGoTo', 0)

                        setTimeout(function(){
                            cardClone.classList.remove('card--active')
                            cardClone.classList.remove('slider-ready')
                            //cardClone.querySelectorAll('.single-item').slick('unslick');
                            cardClone.classList.add('u-visible')
                            
                            setTimeout(function(){
                                cardClone.parentNode.removeChild(cardClone)
                                document.body.classList.remove('has-scroll-disabled')
                            },1000);
                        }, timer)       
                    })
                    

                },2)
            },
            closeCard: function(){
                console.warn('closed!')
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>