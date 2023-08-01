
const fs = require('fs');
const express = require('express');
const server = express();
const dados = require('./src/data/dados.json');
server.use(express.json());

server.listen(3000, () =>{
    console.log("Servidor está funcionando!");

});

server.get('/', (req, res) => {
    return res.json({mensagem: 'Nossa API está funcionando'});
});


//CLIENTE

server.get('/cliente',(req, res) => {
    return res.json(dados.Cliente)
} )

server.post("/cliente",(req, res) => {
    const novoCliente = req.body;

    if(!novoCliente.Nome || !novoCliente.Endereco || !novoCliente.Email || !novoCliente.Telefone){
    return res.status(400).json({mensagem: "Dados incompletos, tente novamente"});
    }
dados.Cliente [IndiceCliente] = cadastroCliente;
salvarDados (dados)

return res.status({mensagem: "Cliente atualizado"})
})

//put === inserir dados
server.put('/Cliente/:id_cliente', (req, res) => {
    const cliente = req.params.id;
    const newCliente = req.body;

    const IndiceCliente = dados.cliente.findIndex(usuario => usuario.id_cliente === clienteId);

    if (IndiceCliente === -1){
    return res.status(404).json({mensagem:"Usuário não encontrado"});
}
dados.Cliente [IndiceCliente] = cadastroCliente;
salvarDados (dados)

return res.status({mensagem: "Cliente atualizado"})

});

server.delete('/cliente/:id_cliente', (req, res) => {
    const id_cliente = parseInt(req.params.id_cliente);

    // filtrar os clientes, removendo pelo id correspondente.
    //u se refere ao cliente
    dados.Cliente = dados.Cliente.filter(u => u. id_cliente !== id_cliente);

    salvarDados(dados);
    return res.status(200).json({mensagem: "Usuário excluído com sucesso."});
})


//VENDA

server.get('/venda',(req, res) => {
    return res.json(dados.Venda)
} );


server.post("/venda",(req, res) => {
    const novaVenda = req.body;

    if(!novaVenda.Data || !novaVenda.id_medicamento || !novaVenda.id_cliente){
    return res.status(400).json({mensagem: "Dados incompletos, tente novamente"});
    }

dados.Venda.push(novaVenda);
salvarDados(dados);
return res.status(201).json({mensagem: "Nova venda cadastrada"})
})

//put === inserir dados
server.put('/Venda/:id_venda', (req, res) => {
    const venda = req.params.id;
    const newVenda = req.body;

    const IndiceVenda = dados.venda.findIndex(usuario => usuario.id_venda === vendaId);

    if (IndiceVenda === -1){
    return res.status(404).json({mensagem:"Usuário não encontrado"});
}
dados.Venda [IndiceVenda] = cadastroVenda;
salvarDados (dados)

return res.status({mensagem: "Cliente atualizado"})

});

server.delete('/cliente/:id_cliente', (req, res) => {
    const id_cliente = parseInt(req.params.id_cliente);

    // filtrar os clientes, removendo pelo id correspondente.
    //u se refere ao cliente
    dados.Cliente = dados.Cliente.filter(u => u. id_cliente !== id_cliente);

    salvarDados(dados);
    return res.status(200).json({mensagem: "Usuário excluído com sucesso."});
})

//VENDEDOR

server.get('/vendedor',(req, res) => {
    return res.json(dados.Vendedor)
} );

server.post("/vendedor",(req, res) => {
    const novoVendedor = req.body;

    if(!novoVendedor.Nome){
    return res.status(400).json({mensagem: "Dados incompletos, tente novamente"});
    }

dados.Vendedor.push(novoVendedor);
salvarDados(dados);
return res.status(201).json({mensagem: "Nova vendedor cadastrada"})
})


//FARMÁCIA

server.get('/farmacia',(req, res) => {
    return res.json(dados.Farmacia)
} );

server.post("/farmacia",(req, res) => {
    const novaFarmacia = req.body;

    if(!novaFarmacia.Nome){
    return res.status(400).json({mensagem: "Dados incompletos, tente novamente"});
    }

dados.Farmacia.push(novaFarmacia);
salvarDados(dados);
return res.status(201).json({mensagem: "Nova farmácia cadastrada"})
})


//FORNECEDOR

server.get('/fornecedor',(req, res) => {
    return res.json(dados.Fornecedor)
} );

server.post("/fornecedor",(req, res) => {
    const novoFornecedor = req.body;

    if(!novoFornecedor.Nome){
    return res.status(400).json({mensagem: "Dados incompletos, tente novamente"});
    }

dados.Fornecedor.push(novoFornecedor);
salvarDados(dados);
return res.status(201).json({mensagem: "Nova fornecedor cadastrado"})
})


//MEDICAMENTO

server.get('/medicamento',(req, res) => {
    return res.json(dados.Medicamento)
} );

server.post("/medicamento",(req, res) => {
    const novoVendedor = req.body;

    if(!novoVendedor.Nome){
    return res.status(400).json({mensagem: "Dados incompletos, tente novamente"});
    }
    
    dados.Vendedor.push(novoVendedor);
    salvarDados(dados);
    return res.status(201).json({mensagem: "Nova venda cadastrada"})
    
    
    });
    

function salvarDados(){
    fs.writeFileSync(__dirname +'/src/data/dados.json', JSON.stringify(dados, null, 2))
}
