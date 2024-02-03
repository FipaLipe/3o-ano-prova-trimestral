alert("Olá, seja bem vinda(o) à atividade!")

const meusAlbuns = [
  {
    "nome_do_album": "Kid A",
    "nome_da_banda": "Radiohead",
    "ano_do_album": 2000,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png"
  },
  {
    "nome_do_album": "Is This It",
    "nome_da_banda": "The Strokes",
    "ano_do_album": 2001,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/0/09/The_Strokes_-_Is_This_It_cover.png"
  },
  {
    "nome_do_album": "Hybrid Theory",
    "nome_da_banda": "Linkin Park",
    "ano_do_album": 2000,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/pt/2/23/Linkin_Park_Hybrid_Theory.jpg"
  },
  {
    "nome_do_album": "American Idiot",
    "nome_da_banda": "Green Day",
    "ano_do_album": 2004,
    "imagem_da_capa_do_album": "https://i.discogs.com/CfzrmWDhENP3x0dgH-SqIpv51oRU73LIO_4AB2tVTIg/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMDE1/NDIzLTE1MjI4OTM5/ODctMTEzNS5qcGVn.jpeg"
  },
  {
    "nome_do_album": "Back to Black",
    "nome_da_banda": "Amy Winehouse",
    "ano_do_album": 2006,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png"
  },
  {
    "nome_do_album": "A Rush of Blood to the Head",
    "nome_da_banda": "Coldplay",
    "ano_do_album": 2002,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/6/60/Coldplay_-_A_Rush_of_Blood_to_the_Head_Cover.png"
  },
  {
    "nome_do_album": "The Marshall Mathers LP",
    "nome_da_banda": "Eminem",
    "ano_do_album": 2000,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/a/ae/The_Marshall_Mathers_LP.jpg"
  },
  {
    "nome_do_album": "In Rainbows",
    "nome_da_banda": "Radiohead",
    "ano_do_album": 2007,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/1/14/Inrainbowscover.png"
  },
  {
    "nome_do_album": "The Eminem Show",
    "nome_da_banda": "Eminem",
    "ano_do_album": 2002,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg"
  },
  {
    "nome_do_album": "Hot Fuss",
    "nome_da_banda": "The Killers",
    "ano_do_album": 2004,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/1/17/The_Killers_-_Hot_Fuss.png"
  },
  {
    "nome_do_album": "Elephant",
    "nome_da_banda": "The White Stripes",
    "ano_do_album": 2003,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/1/11/Elephant%2C_The_White_Stripes.png"
  },
  {
    "nome_do_album": "Discovery",
    "nome_da_banda": "Daft Punk",
    "ano_do_album": 2001,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png"
  },
  {
    "nome_do_album": "Absolution",
    "nome_da_banda": "Muse",
    "ano_do_album": 2003,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/b/b4/Muse_-_Absolution_Cover_UK.jpg"
  },
  {
    "nome_do_album": "Viva la Vida or Death and All His Friends",
    "nome_da_banda": "Coldplay",
    "ano_do_album": 2008,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/b/b2/Coldplay_-_Viva_la_Vida_or_Death_and_All_His_Friends.png"
  },
  {
    "nome_do_album": "Stankonia",
    "nome_da_banda": "OutKast",
    "ano_do_album": 2000,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/0/0b/OutKast_-_Stankonia.JPG"
  },
  {
    "nome_do_album": "Speakerboxxx/The Love Below",
    "nome_da_banda": "OutKast",
    "ano_do_album": 2003,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/4/47/Outkast-speakerboxx-lovebelow.jpg"
  },
  {
    "nome_do_album": "X&Y",
    "nome_da_banda": "Coldplay",
    "ano_do_album": 2005,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Coldplay_X%26Y.svg/1920px-Coldplay_X%26Y.svg.png"
  },
  {
    "nome_do_album": "Whatever People Say I Am, That's What I'm Not",
    "nome_da_banda": "Arctic Monkeys",
    "ano_do_album": 2006,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/8/88/Whatever_People_Say_I_Am%2C_That%27s_What_I%27m_Not_%282006_Arctic_Monkeys_album%29.jpg"
  },
  {
    "nome_do_album": "Black Holes and Revelations",
    "nome_da_banda": "Muse",
    "ano_do_album": 2006,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/c/c5/BlackHolesCover.jpg"
  },
  {
    "nome_do_album": "Fever to Tell",
    "nome_da_banda": "Yeah Yeah Yeahs",
    "ano_do_album": 2003,
    "imagem_da_capa_do_album": "https://upload.wikimedia.org/wikipedia/en/0/0b/Yeah_Yeah_Yeahs_-_Fever_to_Tell.png"
  }
]

function organizaEmLinhasEColunas(albuns) {
  const numeroDeColunas = 3
  const numeroDeLinhas = Math.ceil(albuns.length / numeroDeColunas)

  let linhas = new Array(numeroDeLinhas)

  let indiceAlbuns = 0;

  for (let i = 0; i < numeroDeLinhas; i++) {
    linhas[i] = new Array(numeroDeColunas)

    for (let j = 0; j < numeroDeColunas; j++) {
      if (indiceAlbuns < albuns.length) {
        linhas[i][j] = albuns[indiceAlbuns++]
      }
    }
  }

  return linhas
}

function criaCardHtmlParaAlbum(album) {
  return `
  <div class="card col-4">
    <img class="card-img-top"
      src="${album.imagem_da_capa_do_album}"
      alt="">
    <div class="card-body">
      <h5 class="card-title">${album.nome_do_album}</h5>
      <p class="card-text">${album.nome_da_banda} - <b>${album.ano_do_album}</b></p>
    </div>
  </div>
  `
}

function criaLinhaDeAlbuns(uma_linha) {
  const div = document.createElement("div")
  div.classList.add("row")
  div.innerHTML = uma_linha.map(coluna => criaCardHtmlParaAlbum(coluna)).join("\n")
  return div
}

function criaListaDeAlbuns(linhas) {
  const div = document.createElement("div")
  div.classList.add("col-lg-12", "px-0", "container")
  div.setAttribute("id", "album-list")

  linhas.forEach(linha => {
    div.appendChild(criaLinhaDeAlbuns(linha))
  });

  return div
}

function atualizaListaDeAlbuns() {
  const listaDeAlbuns = document.getElementById("album-list")

  listaDeAlbuns.replaceWith(criaListaDeAlbuns(organizaEmLinhasEColunas(meusAlbuns)))
}

