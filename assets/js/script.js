$(() => {
    $("#portafolio .card").click(function(event){
        let id = $(this).data('id');
        //window.location.replace(`/${id}`);
        alert(`¡Próximamente publicaré más información acerca de ${id}!`)
    })
})