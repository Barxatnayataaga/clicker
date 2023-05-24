window.onload = () =>{
    let boostAddClick1 = {
        value: 1,
        price: 15
    };

    let boostAddClick5 = {
        value: 5,
        price: 100
    };


    let count = 0;
    let appendCount = 1;

    let cornImg = document.querySelector("#bam")
    let textCount = document.querySelector("#bim")
    let textLevel = document.querySelector('#aaa')
    let textDamage = document.querySelector('#ccc')
    
    let btnAppendClick1 = document.querySelector('.examplebtn:nth-child(1)')
    let btnAppendClick5 = document.querySelector('.examplebtn:nth-child(2)')
    let btnNewGame = document.querySelector('.examplebtn:nth-child(3)')

    const UpdateUI = (element, text) =>{
        element.innerText = text
    };

    const UpdateLVL = (_count) =>{
        let textlvl = null
        if(_count > 1000 && _count <= 4999)
        {
            textlvl = "Уровень: Любитель"
        }
        if(_count > 0 && _count <= 999)
        {
            textlvl = "Уровень: Новичек"
        }
        if(_count > 5000)
        {
            textlvl = "Уровень: Продвинутый"
        }
        UpdateUI(textLevel, textlvl)
    
    
    }

    const AddBoost = ( { btnBoost, element, text } ) =>{
        if(btnBoost.price <= count)
        {
            appendCount = appendCount + btnBoost.value;
            count -= btnBoost.price;
            btnBoost.price *= 2;
            UpdateUI(textCount, `Заработано: ${count}$`);
            UpdateUI(element, `${text} | ${btnBoost.price}$`);
            UpdateUI(textDamage, `Текущий урон: ${appendCount}`);
        }
        else
        {
            console.log('Не хватает денег')
        }
        UpdateLVL(count)
    };

    cornImg.addEventListener("click", () =>{
        count += appendCount;
        UpdateUI(textCount, `Заработано: ${count}$`)
    })

    btnAppendClick1.addEventListener('click', ()=>{
        let boostClick = {
            btnBoost: boostAddClick1,
            element: btnAppendClick1,
            text: `+1 доп. клик`
        };
        AddBoost(boostClick)
    });

    btnAppendClick5.addEventListener('click', ()=>{
        let boostClick = {
            btnBoost: boostAddClick5,
            element: btnAppendClick5,
            text: `+5 доп. клик`
        };
        AddBoost(boostClick)
    });

    btnNewGame.addEventListener('click', ()=>{
        if(count >= 5000)
        {
            boostAddClick1 = {
                value: 1,
                price: 15
            }

            boostAddClick5 = {
                value: 5,
                price: 100
            }

            count = 0;
            appendCount = 1;
            UpdateUI(textCount, `Заработано: 0$`);
            UpdateUI(textDamage, `Текущий урон: 0`);
            UpdateUI(textLevel, `Уровень: Начальный`);
            UpdateUI(btnAppendClick1, `+1 доп. клик |15$`);
            UpdateUI(btnAppendClick5, `+5 доп. клик |100$`);

        }
    });




};    
  
