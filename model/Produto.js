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
        this.template = `
            <div class="product" id="${this.id}">
            <img src=${this.url} width="150px" height="130" alt="">
            <p>${this.nome}</p>
            <div>${this.preco}</div>
            <div class="quantidade">
            <button onclick=${this.aumentarQuantidade} class="aumentar">+</button>
            <span>${this.quantidade}</span>
            <button class="diminuir">-</button>
            </div>
        </div>
        `
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
        console.log(this);
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

export default Produto;