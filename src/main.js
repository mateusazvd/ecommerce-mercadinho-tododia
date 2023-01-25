


// aqui minha modificação  --- MATEUS AZEVEDO
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
        console.log(this.quantidade);
    }
    diminuirQuantidade()
    {
        this.quantidade--;
        console.log(this);
    }

    getTemplate()
    {
        console.log("oi");
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
            id: 8,
            categoria: "alimento",
            nome: "Molho de Tomate Salsaretti 300Gr",
            preco: 1.68,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1541037035/1xg.jpg?imwidth=256"
          },
          {
            id: 9,
            categoria: "alimento",
            nome: "Biscoito Cream Cracke",
            preco: 2.66,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1542984336/1xg.jpg?imwidth=256"
          },
          {
            id: 10,
            categoria: "bebida",
            nome: "Refrigerante coca cola",
            preco: 8.5,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1505930927/1xg.jpg"
          },
          {
            id: 11,
            categoria: "bebida",
            nome: "Refrigerante guaraná 200ml",
            preco: 1.3,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1516997523/1xg.jpg?imwidth=292"
          },
          {
            id: 12,
            categoria: "bebida",
            nome: "Refrigerante sukita 2L",
            preco: 1.3,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1509525988/1xg.jpg?imwidth=292"
          },
          {
            id: 13,
            categoria: "bebida",
            nome: "cerveja heineken 12 unidades",
            preco: 56,
            quantidade: 0,
            url: "https://imgs.extra.com.br/55021179/1g.jpg"
          },
          {
            id: 14,
            categoria: "bebida",
            nome: "cerveja Einsenbahn pilsen",
            preco: 6,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1511106407/1xg.jpg?imwidth=292"
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
            nome: "cerveja brahma duplo malte",
            preco: 38,
            quantidade: 0,
            url: "https://imgs.extra.com.br/55040140/1xg.jpg"
          },
          {
            id: 17,
            categoria: "bebida",
            nome: "cerveja brahma duplo malte",
            preco: 38,
            quantidade: 0,
            url: "https://imgs.extra.com.br/55042576/1g.jpg"
          },
          {
            id: 18,
            categoria: "bebida",
            nome: "Agua mineral natural",
            preco: 2,
            quantidade: 0,
            url: "https://imgs.extra.com.br/8930757/1xg.jpg?imwidth=292"
          },
          {
            id: 19,
            categoria: "bebida",
            nome: "suco de laranja natural",
            preco: 2,
            quantidade: 0,
            url: "https://imgs.extra.com.br/55040922/1xg.jpg"
          },
          {
            id: 20,
            categoria: "bebida",
            nome: "suco de uva natural",
            preco: 6.8,
            quantidade: 0,
            url: "https://imgs.extra.com.br/1515118241/1xg.jpg?imwidth=292"
          },
          {
            id: 21,
            categoria: "limpeza",
            nome: "sabão liquido ariel",
            preco: 6.8,
            quantidade: 0,
            url: "https://imgs.extra.com.br/12550008/1xg.jpg"
          },
          {
            id: 22,
            categoria: "limpeza",
            nome: "Papel higienico neve",
            preco: 36,
            quantidade: 0,
            url: "https://imgs.extra.com.br/15059290/1g.jpg?imwidth=256"
          },
          {
            id: 23,
            categoria: "limpeza",
            nome: "shampoo anti-caspa do cr7",
            preco: 21,
            quantidade: 0,
            url: "https://imgs.extra.com.br/55049080/1g.jpg"
          },
          {
            id: 24,
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
    }

    adicionarAoCarrinho(produto)
    {
        this.produtos.push(produto);
    }

    removerDoCarrinho(id)
    {
        let novoCarrinho = [];
        for(let i = 0; i < this.produtos.length; i++)
        {
            if(this.produtos[i].id === id)
            {
                continue;
            }
            else{
                novoCarrinho.push(this.produtos[i]);
            }
        }
       return this.produtos = novoCarrinho;
    }

    calcularPrecoDaCompra()
    {
        let total = 0;
        for(let k = 0; k < this.produtos.length; k++)
        {
            total += this.produtos[k].preco * this.produtos[k].quantidade;
        }

        console.log(`O total da compra é de R$ ${total}`)
    }
    atualizarqtd()
    {
      let tamanho = this.produtos.length
      document.querySelector('#qtd-cart').innerHTML = tamanho
      document.querySelector('#qtd-cart').classList.add('qtd-cart')
      
      console.log(tamanho);
    }

}
let estoque = popularEstoque(metaData[0].todos);

const productsList = document.querySelector(".products-list");
let view = "";
const exibidos = []



let carrinho = new Carrinho(1)


function adiciona(id){
    let total = estoque
    for(let i = 0; i < total.length;i++){
      if(total[i].id == id){
        total[i].quantidade++
        console.log(total[i]);
        carrinho.adicionarAoCarrinho(total[i])
        console.log(carrinho.produtos);
        carrinho.atualizarqtd()
        document.querySelector(`#${total[i].categoria}`).click()
      }
    }
    
}
function diminuir(id){
  let total = estoque
  for(let i = 0; i < total.length;i++){
    if(total[i].id == id){
      total[i].quantidade--
      console.log(total[i]);
      carrinho.produtos = carrinho.removerDoCarrinho(total[i].id)
      carrinho.atualizarqtd()
      document.querySelector(`#${total[i].categoria}`).click()
    }
  }
  
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

    productsList.innerHTML = view;

}



// renderizar(e.produtosAExibir)
// productsList.innerHTML = view;

const cart = new Carrinho(1);

// cart.adicionarAoCarrinho(estoque[0]);
// cart.adicionarAoCarrinho(estoque[1]);

// estoque[1].aumentarQuantidade();

// console.log(e);

const f = new Estoque()
f.exibirProdutos("all", estoque);
renderizar(f.produtosAExibir);
productsList.innerHTML = view;


let aumentar = document.querySelectorAll(".aumentar");

function leituraActionsBtn(){
    for(let btn of aumentar)
{
    btn.addEventListener("click", (e) =>{
        console.log(e.currentTarget);
    })
}
}
leituraActionsBtn(); 

// function test(value)
// {
//     console.log(value);
// }

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



