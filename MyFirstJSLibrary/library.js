function $(selector){
    const self = 
    {
        element: document.querySelector(selector),
        html: ()=> self.element,
        on:(event, callback)=>{
            document.addEventListener(event, callback)
        },
        hide: ()=>{
            self.element.style.display = "none"
        },
        attr:(name, value)=>{
            if(value ==  null)
                self.element.getAttribute(name)
            else
                self.element.setAttribute(name, value)
        }
    }
    return self
}

$('h1').attr('class', 'h1class')
//$('h3').hide()
//console.log($('h3').html())
/*$('h3').on('click', function(){
    alert('clicked')
})*/