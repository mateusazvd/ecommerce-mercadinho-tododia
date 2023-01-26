class Produto
{
    constructor(id, categoria, nome, preco, quantidade, url)
    {
        this.id = id;
        this.categoria = categoria;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.url = url;
    }

    getId()
    {
        return this.id;
    }

    getNome()
    {
        return setTimeout(() => document.querySelector(".products-list"), 1000);
    }

    getPreco()
    {
        return this.preco;
    }

    aumentarQuantidade()
    {
      this.quantidade++;
    }
    diminuirQuantidade()
    {
      this.quantidade > 0? this.quantidade--: this.quantidade = 0;
    }
}
class Estoque
{
    constructor()
    {
      this.produtosAExibir = [];
    }

    exibirProdutos(flag,estoque)
    {
        for(let i = 0; i < estoque.length; i++)
        {
            if(estoque[i].categoria == flag)
            {
                this.produtosAExibir.push(estoque[i])
            } 
        }

        for(let j = 0; j < estoque.length; j++)
        {
            if(flag == "all")
                {
                  this.produtosAExibir.push(estoque[j])
                }
        }
        
    }
}

class Venda
{
  constructor(id, nome, items, endereco, formaDePagamento)
  {
    this.id = id;
    this.nome = nome;
    this.items = items;
    this.endereco = endereco;
    this.formaDePagamento = formaDePagamento;
  }
    setRua(valor)
    {
      if(valor != null && valor != undefined && typeof valor === "string")
      {
        this.endereco.rua = valor;
      }
    }

    setNumero(valor)
    {
      if(valor != null && valor != undefined && typeof valor === "string")
      {
        this.endereco.numero = valor;
      }
    }

    setBairro(valor)
    {
      if(valor != null && valor != undefined && typeof valor === "string")
      {
        this.endereco.bairro = valor;
      }
    }

    setFormaDePagamento(valor)
    {
      if(valor != null && valor != undefined && typeof valor === "string")
      {
        this.formaDePagamento = valor;
      }
    }

    getFormaDePagamento(e)
    {
        if(e.target.checked)
        {
            this.formaDePagamento = e.target.value;
        }
    }

    selfLog()
    {
        console.log(this);
    }
}


let metaData = [
    {
        todos: [
          {
            id: 1,
            categoria: "alimento",
            nome: "Macarrão Parafuso  DONA BENTA 500g",
            preco: 2.66,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1546546418/1xg.jpg?imwidth=292"
          },
          {
            id: 2,
            categoria: "alimento",
            nome: "Açúcar Refinado ALTO ALEGRE 1kg",
            preco: 3.6,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1542978687/1xg.jpg?imwidth=292"
          },
          {
            id: 3,
            categoria: "alimento",
            nome: "Feijão Carioca Tipo 1 NAMORADO 1kg",
            preco: 8.8,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1547800339/1xg.jpg?imwidth=292"
          },
          {
            id: 4,
            categoria: "alimento",
            nome: "Óleo de Soja Liza 900ml",
            preco: 12.3,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1514291153/1xg.jpg?imwidth=292"
          },
          {
            id: 5,
            categoria: "alimento",
            nome: "Salgadinho doritos queijo 140g",
            preco: 11.8,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1510183848/1xg.jpg?imwidth=256"
          },
          {
            id: 6,
            categoria: "alimento",
            nome: "Biscoito passatempo",
            preco: 3,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1542765632/1xg.jpg?imwidth=256"
          },
          {
            id: 7,
            categoria: "alimento",
            nome: "Leite de Coco Imperial 200Ml",
            preco: 3.6,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1541322744/1xg.jpg?imwidth=256"
          },
          {
            id: 8,
            categoria: "alimento",
            nome: "Creme de Leite UHT Piracanjuba - 200 g",
            preco: 3.2,
            quantidade: 0,
            url: "https://imgs.extra.com.br/55048352/1xg.jpg?imwidth=256"
          },
          {
            id: 9,
            categoria: "alimento",
            nome: "Molho de Tomate Salsaretti 300Gr",
            preco: 1.68,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1541037035/1xg.jpg?imwidth=256"
          },
          {
            id: 10,
            categoria: "alimento",
            nome: "Biscoito Cream Cracke",
            preco: 2.66,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1542984336/1xg.jpg?imwidth=256"
          },
          {
            id: 11,
            categoria: "bebida",
            nome: "Refrigerante coca cola",
            preco: 8.5,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1505930927/1xg.jpg"
          },
          {
            id: 12,
            categoria: "bebida",
            nome: "Refrigerante guaraná 200ml",
            preco: 1.3,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1516997523/1xg.jpg?imwidth=292"
          },
          {
            id: 13,
            categoria: "bebida",
            nome: "Refrigerante sukita 2L",
            preco: 1.3,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1509525988/1xg.jpg?imwidth=292"
          },
          {
            id: 14,
            categoria: "bebida",
            nome: "cerveja heineken 12 unidades",
            preco: 56,
            quantidade: 0,
            url: "https://imgs.extra.com.br/55021179/1g.jpg"
          },
          {
            id: 15,
            categoria: "bebida",
            nome: "cerveja Einsenbahn pilsen",
            preco: 6,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1511106407/1xg.jpg?imwidth=292"
          },
          {
            id: 16,
            categoria: "bebida",
            nome: "cerveja Einsenbahn pilsen",
            preco: 6,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1511106407/1xg.jpg?imwidth=292"
          },
          {
            id: 17,
            categoria: "bebida",
            nome: "cerveja brahma duplo malte",
            preco: 38,
            quantidade: 0,
            url: "https://imgs.extra.com.br/55040140/1xg.jpg"
          },
          {
            id: 18,
            categoria: "bebida",
            nome: "cerveja brahma duplo malte",
            preco: 38,
            quantidade: 0,
            url: "https://imgs.extra.com.br/55042576/1g.jpg"
          },
          {
            id: 19,
            categoria: "bebida",
            nome: "Agua mineral natural",
            preco: 2,
            quantidade: 0,
            url: "https://imgs.extra.com.br/8930757/1xg.jpg?imwidth=292"
          },
          {
            id: 20,
            categoria: "bebida",
            nome: "suco de laranja natural",
            preco: 2,
            quantidade: 0,
            url: "https://imgs.extra.com.br/55040922/1xg.jpg"
          },
          {
            id: 21,
            categoria: "bebida",
            nome: "suco de uva natural",
            preco: 6.8,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1515118241/1xg.jpg?imwidth=292"
          },
          {
            id: 22,
            categoria: "limpeza",
            nome: "sabão liquido ariel",
            preco: 6.8,
            quantidade: 0,
            url: "https://imgs.extra.com.br/12550008/1xg.jpg"
          },
          {
            id: 23,
            categoria: "limpeza",
            nome: "Papel higienico neve",
            preco: 36,
            quantidade: 0,
            url: "https://imgs.extra.com.br/15059290/1g.jpg?imwidth=256"
          },
          {
            id: 24,
            categoria: "limpeza",
            nome: "shampoo anti-caspa do cr7",
            preco: 21,
            quantidade: 0,
            url: "https://imgs.extra.com.br/55049080/1g.jpg"
          },
          {
            id: 25,
            categoria: "limpeza",
            nome: "shampoo pantene",
            preco: 21,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1509514328/1xg.jpg"
          }
        ]
      }
]

const popularEstoque = (arr) =>{
    let resultado = [];
    for(let k = 0; k < arr.length; k++)
    {
        resultado.push(new Produto(arr[k].id, 
                    arr[k].categoria,
                    arr[k].nome,
                    arr[k].preco,
                    arr[k].quantidade,
                    arr[k].url));
    }

    return resultado; 
}
class Carrinho
{
    constructor(id)
    {
        this.id = id;
        this.produtos = [];
        this.set = []
        this.coisasCompradas = []
    }

    checarCarrinho(arr)
    {
        let total = estoque
        for(let i = 0; i < arr.length; i++)
        {
          for(let j = 0; j < total.length; j++){
            if(total[j].id == arr[i]){
                this.produtos[i] = total[j];
                
            }
          }
        }

    }

    adicionarAoCarrinho(produto)
    {   
        if(!this.set.includes(produto.id)){
          this.set.push(produto.id); 
        }
        this.checarCarrinho(this.set);
      }


    removerDoCarrinho(id)
    {
      for(let k = 0; k < this.produtos.length; k++)
        {
                if(this.produtos[k].id === id)
                {
                    this.produtos[k].diminuirQuantidade();
                    if(this.produtos[k].quantidade == 0)
                    {
                      this.produtos = this.produtos.filter(produto => produto.id !== id);
                    }
                }
        }
    }

    calcularPrecoDaCompra()
    {
        let total = 0;
        for(let k = 0; k < this.coisasCompradas.length; k++)
        {
            total += this.coisasCompradas[k].preco * this.coisasCompradas[k].quantidade;
        }

       return total.toFixed(2)
    }
    atualizarqtd()
    {
      let tamanho = carrinho.coisasCompradas.length
      document.querySelector('#qtd-cart').innerHTML = tamanho
      document.querySelector('#qtd-cart').classList.add('qtd-cart')
    }
}
let coisasCompradas = []
let estoque = popularEstoque(metaData[0].todos);
const productsList = document.querySelector(".products-list");
let view = "";
let state_filter = 'all'
const exibidos = []

function abrirModal(){
  let modal = document.querySelector('.cart-modal')
  modal.classList.toggle("visible");
  renderizarCarrinho(carrinho.coisasCompradas)


}

let carrinho = new Carrinho(1)

function renderizarCarrinho(arr){

  let carrinhoView = '<p class = "titulo-vazio">Não há itens no seu carrinho</p>'
  carrinho.coisasCompradas = []
  if(arr.length != 0){
    carrinhoView = ''
  }
  arr.map(produto => {    
      if(produto.quantidade != 0){
        carrinho.coisasCompradas.push(produto)
        carrinhoView = carrinhoView + `
            <div class="cart-item" id = ${produto.id}>
              <img src=${produto.url} alt="">
              <div>
                <div class="cart-item-nome">${produto.nome}</div>
                <div class="cart-item-preco">R$ ${(produto.preco * produto.quantidade).toFixed(2)}</div>
                <div class=cart-item-qtd-area>
                  <button onclick='adiciona(${produto.id})' class="aumentar">+</button>
                  <span>${produto.quantidade}</span>
                  <button onclick='diminuir(${produto.id})' class="aumentar">-</button>  
                </div>
              </div>
            </div>
    `
    }
    
  }

)
  document.querySelector('.card-item-list-area').innerHTML = carrinhoView
  // console.log(carrinho.produtos);
}
function exibirTotal(){

  document.querySelector('#total_compra').innerHTML = `<div class = 'display-total'> Total: R$ ${carrinho.calcularPrecoDaCompra()}</div>`
}
function adiciona(id){
    let total = estoque
    for(let i = 0; i < total.length;i++){
      if(total[i].id == id){
        total[i].aumentarQuantidade();
        // console.log(total[i]);
        carrinho.adicionarAoCarrinho(total[i])
        // console.log(carrinho.produtos);
        document.querySelector(`#${state_filter}`).click()
      }
    }
    renderizarCarrinho(carrinho.produtos)
    carrinho.calcularPrecoDaCompra()
    carrinho.atualizarqtd()
    exibirTotal()

    
}
function diminuir(id){
  let total = estoque
  for(let i = 0; i < total.length;i++){
    if(total[i].id == id){
      // total[i].quantidade--
      // console.log(total[i]);
      carrinho.removerDoCarrinho(total[i].id)
      document.querySelector(`#${state_filter}`).click()
    }
  }
  renderizarCarrinho(carrinho.produtos) 
  carrinho.calcularPrecoDaCompra()
  carrinho.atualizarqtd()
  exibirTotal()


}



const e = new Estoque();
// e.exibirProdutos("all", estoque);
let actions = document.querySelectorAll(".sub-menu-actions");
for(let action of actions)
{
    action.addEventListener("click", (e) =>{
        view = "";
        filtrar(e.target.id);
    })
}

function filtrar(id)
{
    let e = new Estoque();
    e.exibirProdutos(id, estoque);
    renderizar(e.produtosAExibir);
    state_filter = id

    productsList.innerHTML = view;

}


const cart = new Carrinho(1);

const f = new Estoque()
f.exibirProdutos("all", estoque);
renderizar(f.produtosAExibir);
productsList.innerHTML = view;


let aumentar = document.querySelectorAll(".aumentar");

function leituraActionsBtn(){
    for(let btn of aumentar)
{
    btn.addEventListener("click", (e) =>{
        // console.log(e.currentTarget);
    })
}
}

leituraActionsBtn(); 

function renderizar(arr){
    for(let i = 0; i < arr.length; i++)
    {
        view = view +  `
        <div class="product" id="${arr[i].id}">
        <img src=${arr[i].url} width="150px" height="130" alt="">
        <p>${arr[i].nome}</p>
        <div>R$ ${arr[i].preco.toFixed(2)}</div>
        <div class="quantidade">
        <button onclick='adiciona(${arr[i].id})' class="aumentar">+</button>
        <span>${arr[i].quantidade}</span>
        <button onclick='diminuir(${arr[i].id})' class="aumentar">-</button>       
        </div>
    </div>
    `
    }
}



function gerarLinkCompra(){
  
  // document.querySelector('#aqui').setAttribute('href',`https://picpay.me/mikael.previtera/${carrinho.calcularPrecoDaCompra()}`) 
  // let link = `https://picpay.me/mikael.previtera/${carrinho.calcularPrecoDaCompra()}`
  // let btnFinalizar = document.querySelector('#btnFinaliza')
  // btnFinalizar.innerHTML `<a id="aqui" href="${link}">Finalizar compra</a>`
  logFinal();
  return `https://app.picpay.com/user/mikael.previtera/`
  
}

function logFinal()
{
  console.log("Estados importantes: ");
  console.log("Estoque: ", estoque);
  console.log("Itens a exibir: ", f.produtosAExibir);
  console.log("Itens no carrinho:", carrinho.coisasCompradas);
  console.log("Total da compra:", carrinho.calcularPrecoDaCompra());
}

/**
 * Nome 
 * Endereço rua casa bairro cidade
 * Forma de Pagamento
 */

function formatarVenda(...args)
{
    let variaveis = args;
    
    vendas.push(new Venda(...variaveis));
}

let vendas = [];


/**
 * formatarVenda(1, 
 *               document.querySelector("#nome").value
 *               carrinho.coisasCompradas, 
 *               {rua: document.querySelector("#endereco").value, 
 *               numero: document.querySelector("#numero").value}, 
 *               document.getElementById(""))
 */

function resolverVenda()
{
  return formatarVenda(1,document.querySelector("#nome").value,
                  carrinho.coisasCompradas, 
                  {rua: document.querySelector("#endereco").value, 
                  numero: document.querySelector("#numero").value}, 
                  document.getElementById(""))
}

//abrir carrinho de compras
function abrirModalCompra(){
  elemento = document.querySelector('.modal-finalizar-compra')
  elemento.classList.toggle("visible");
  console.log('teste');
}

function chamaFuncoesCarrinho(){
  if(carrinho.coisasCompradas.length != 0){
    gerarLinkCompra()
    abrirModalCompra()
  }
}

function resolverMudanca()
{
  if(document.getElementById("1-form").checked)
  {
    document.querySelector(".btn-area-compra").innerHTML = `
      <a onclick=${resolverVenda()} href="https://app.picpay.com/user/mikael.previtera/${carrinho.calcularPrecoDaCompra()}"> Finalizar Compra</a>
    `
  }else{
    document.querySelector(".btn-area-compra").innerHTML = `
    <button onclick = "compraFinalizada()">Finalizar Compra</button>
    `
  } 

  
}


function compraFinalizada(){
  abrirModalCompra()
  elemento = document.querySelector('.compra-finalizada')
  elemento.classList.toggle("visible");
  console.log('teste');
  setTimeout(()=>{
    elemento = document.querySelector('.compra-finalizada')
    elemento.classList.toggle("visible");
  },2000)
  coisasCompradas = []
  renderizarCarrinho(coisasCompradas)
  carrinho.atualizarqtd()

}