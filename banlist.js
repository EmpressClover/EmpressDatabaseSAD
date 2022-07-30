function takescreenshot() {
        
    html2canvas(document.querySelector("#root")).then(canvas => {
        window.open().    document.body.appendChild(canvas);
    });
    
    }


    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
          e.target.remove();
        }
      });