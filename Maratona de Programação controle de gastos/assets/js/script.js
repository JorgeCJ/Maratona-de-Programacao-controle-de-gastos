let totalOrcamento = document.querySelector('.totalOrcamento');
let buttonTotalOrcamento = document.querySelector('.buttonTotalOrcamento');
let formularioEntradaDespesa__nome = document.querySelector('.formularioEntradaDespesa__nome');
let formularioEntradaDespesa__valor = document.querySelector('.formularioEntradaDespesa__valor');
let buttonAdicionarDespesa = document.querySelector('.buttonAdicionarDespesa');
let secaoImpressaoResultados__orcamento = document.querySelector('.secaoImpressaoResultados__orcamento p');
let secaoImpressaoResultados__despesas = document.querySelector('.secaoImpressaoResultados__despesas p');
let secaoImpressaoResultados__saldo = document.querySelector('.secaoImpressaoResultados__saldo p');
let erroTotalOrcamento = document.querySelector('.erroTotalOrcamento');
let erroDespesaNome = document.querySelector('.erroDespesaNome');
let erroDespesaValor = document.querySelector('.erroDespesaValor');

let li = document.createElement("li");
li.innerHTML = '';
li.innerHTML = ' Preencha todos os campos corretamente e com valores positivos';

buttonTotalOrcamento.addEventListener('click', function (event) {
    if (totalOrcamento.value == '' || Number(totalOrcamento.value) < 0) {
        erroTotalOrcamento.appendChild(li);
        return;
    }
    secaoImpressaoResultados__orcamento.innerHTML = totalOrcamento.value;
    erroTotalOrcamento.innerHTML = '';

})

buttonAdicionarDespesa.addEventListener('click', () => {
    if (totalOrcamento.value == '') {
        erroTotalOrcamento.appendChild(li);
        return;
    }

    if (totalOrcamento.value !== '') {
        if (formularioEntradaDespesa__nome.value == '') {
            erroDespesaNome.appendChild(li);
            return;
        }
        if (formularioEntradaDespesa__valor.value == '') {
            erroDespesaValor.appendChild(li);
            return;
        }
        if (Number(formularioEntradaDespesa__valor.value) < 0) {
            erroDespesaValor.appendChild(li);
            return;
        }

        erroDespesaNome.innerHTML = ''
        erroDespesaValor.innerHTML = ''
        let lista = document.createElement('li');
        lista.classList.add('atribuirEstilo');
        lista.innerHTML = `${Number(formularioEntradaDespesa__valor.value)}`;
        let nomesGastos = document.createElement('span');
        nomesGastos.innerHTML = `${formularioEntradaDespesa__nome.value} - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R$<br><br> `;
        nomesGastos.classList.add('nomesGastar');
        let img = document.createElement('img');
        img.src = "./assets/img/trash.svg";
        img.alt = 'DELETAR';
        img.classList.add('lixeira');
        let spanNomeDespesas = document.createElement('span');
        spanNomeDespesas.classList.add('localNomeDespesas');
        let ulDespesasListas = document.createElement('ul');
        ulDespesasListas.classList.add('containerDespesas__lista');
        let spanImagemLixo = document.createElement('span');
        spanImagemLixo.classList.add('imagemLixo');
        let div = document.createElement('div');
        div.classList.add('paiDespesas');

        if (secaoImpressaoResultados__orcamento.innerHTML !== '') {
            ulDespesasListas.appendChild(lista);
            spanNomeDespesas.appendChild(nomesGastos);
            spanImagemLixo.appendChild(img);
            div.append(spanNomeDespesas, ulDespesasListas, spanImagemLixo);
            document.querySelector('.agrupamentoNomeDespesas').appendChild(div);
            secaoImpressaoResultados__despesas.innerHTML = Number(secaoImpressaoResultados__despesas.innerHTML) + Number(formularioEntradaDespesa__valor.value);
            secaoImpressaoResultados__saldo.innerHTML = Number(totalOrcamento.value) - Number(secaoImpressaoResultados__despesas.innerHTML);
            return;
        }
    }
})

document.querySelectorAll('.agrupamentoNomeDespesas').forEach(function (element) {
    element.addEventListener('click', (event) => {
        const atribuirEstilo = event.target.closest('.paiDespesas').querySelector('.atribuirEstilo');
        if (event.target.tagName === "IMG") {
            atribuirEstilo.remove();
            event.target.closest('.paiDespesas').querySelector('.nomesGastar').remove();
            event.target.remove();
        } else {
            event.target.closest("img").remove();
            event.target.closest('.paiDespesas').querySelector('.nomesGastar').remove();
            atribuirEstilo.remove();
        }
        secaoImpressaoResultados__despesas.innerHTML = Number(secaoImpressaoResultados__despesas.innerHTML) - Number(atribuirEstilo.innerHTML);
        secaoImpressaoResultados__saldo.innerHTML = Number(secaoImpressaoResultados__saldo.innerHTML) + Number(atribuirEstilo.innerHTML);
    })
})










