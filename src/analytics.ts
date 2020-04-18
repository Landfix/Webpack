import * as $ from 'jquery'

function createAnalytics() : object{
    let counter = 0;
    let destroy: boolean = false

    const listener = () : number => counter++

    $(document).on('click', listener)

    return{
        destroy(){
            $(document).off('click', listener)
            destroy = true
        },

        getClicks(){
            if(destroy){
                return `Analitics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window['analytics'] = createAnalytics();