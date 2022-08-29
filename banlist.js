function takescreenshot() {
        
    html2canvas(document.querySelector("#root")).then(canvas => {
        window.open().    document.body.appendChild(canvas);
    });
    
    }

    $("li").click(function() { $(this).closest("li").remove(); }); 