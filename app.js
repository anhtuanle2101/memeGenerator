// document.body.addEventListener('DOMContenLoaded',function(){
    // e.preventDefault();
    const form=document.querySelector('#meme-form');

    function generateMeme(inputs){
        const section=document.querySelector('#meme-list');
        console.log(inputs);
        const container=document.createElement('div');
        container.className='container';
        const img=document.createElement('img');
        img.setAttribute('src',inputs['imageURL']);
        container.append(img);
        if (inputs['textTop']){
            const div1=document.createElement('div');
            div1.innerText=inputs['textTop'];
            div1.className='text-top';
            container.append(div1);
        }
        if (inputs['textBottom']){
            const div2=document.createElement('div2');
            div2.innerText=inputs['textBottom'];
            div2.className='text-bottom';
            container.append(div2);
        }
        const removeBtn=document.createElement('div');
        removeBtn.innerText='X';
        removeBtn.classList.add('remove-btn');
        removeBtn.classList.add('hidden');
        container.append(removeBtn);
        container.addEventListener('mouseover',function(e){
            container.querySelector('.remove-btn').classList.remove('hidden');
        })
        container.addEventListener('mouseout',function(e){
            container.querySelector('.remove-btn').classList.add('hidden');
        })
        console.log(container);
        section.append(container);
    }

    function getInput(){
        return {
            'imageURL':document.querySelector('#image-url').value,
            'textTop':document.querySelector('#text-top').value,
            'textBottom':document.querySelector('#text-bottom').value
        }
    }

    form.addEventListener('click',function(e){
        e.preventDefault();
        if (e.target.tagName==='BUTTON'){
            console.log('clicked');
            const inputs=getInput();
            if (inputs['imageURL']){
                generateMeme(inputs);
            }else{
                alert('Please provide a image URL')
            }
        }
    })  

    const section=document.querySelector('#meme-list');
    section.addEventListener('click',function(e){
        console.log(e.target);
        if(e.target.tagName==='DIV'){
            e.target.parentElement.remove();
        }
    })
// })