var nome = document.querySelector('#nom')
var orca = document.querySelector('#orc')
var larg = document.querySelector('#lar')
var comp = document.querySelector('#com')
var piso = document.querySelector('#pis')
var arga = document.querySelector('#arg')

var t_area = document.querySelector('#rarea')
var t_uniarg = document.querySelector('#unidarg')
var t_vpiso = document.querySelector('#valorpiso')
var t_varg = document.querySelector('#valorarg')
var t_total = document.querySelector('#totalcom')
var t_res = document.querySelector('#nao')

function areatotal() {

    t_area.innerHTML = (parseFloat(lar.value) * parseFloat(com.value)) * 1.2
    t_uniarg.innerHTML = (((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) / 4)
    t_vpiso.innerHTML = ((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) * parseFloat(pis.value)
    t_varg.innerHTML = (((((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) / 4)) * parseFloat(arg.value))
    t_total.innerHTML = ((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) * parseFloat(pis.value) + (((((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) / 4)) * parseFloat(arg.value))
    t_res.innerHTML = 'Valor suficiente'

}
function areatotal1() {
    t_area.innerHTML = (parseFloat(lar.value) * parseFloat(com.value)) * 1.2
    t_uniarg.innerHTML = (((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) / 4)
    t_vpiso.innerHTML = ((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) * parseFloat(pis.value)
    t_varg.innerHTML = (((((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) / 4)) * parseFloat(arg.value))
    t_total.innerHTML = ((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) * parseFloat(pis.value) + (((((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) / 4)) * parseFloat(arg.value))
    t_res.innerHTML = 'Valor não é suficiente'

}

function teste(){
    if (parseFloat((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) * parseFloat(pis.value) + (((((parseFloat(lar.value) * parseFloat(com.value)) * 1.2) / 4)) * parseFloat(arg.value))<parseFloat(orc.value)){
        areatotal()
    }else{
        areatotal1()
    }
}