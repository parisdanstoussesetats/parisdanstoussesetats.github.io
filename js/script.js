var map = document.querySelector('#map')
var paths = map.querySelectorAll('.map__image polygon')
var lists = map.querySelectorAll('.map__list li')

paths.forEach(function(path){
    path.addEventListener('mouseenter',function(e) {
        var id = this.id
        map.querySelectorAll('.is-active').forEach( function(item){
            item.classList.remove('is-active')
        })
        document.querySelector('#list_'+id).classList.add("is-active")
        document.querySelector(id).classList.add("is-active")

    })
    
})
