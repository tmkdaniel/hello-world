//função par apegar um ELEMENT e transformar em um objeto, com os atributos e valores
function htmlToObj(ele){
    let nodes  = [];
    let values = [];
    
    
    
    //Obtem Dados
    for (var att, i = 0, atts = ele.attributes, n = atts.length; i < n; i++) {
        att = atts[i];
        nodes .push(att.nodeName);
        values.push(att.nodeValue);
    }
    
    
    //Cria Objeto
    var retorno = {};
    for (let i = 0; i < nodes.length; i++) {
        retorno[nodes[i]] = values[i];
    }
    
    return retorno;
}