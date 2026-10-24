# Sato Petshop

Site institucional do **Sato Petshop**, petshop em Presidente Prudente/SP (Vila Boa Vista). O site apresenta os serviços, a história da loja e as formas de contato, com agendamento rápido pelo WhatsApp.

## Páginas

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Página inicial: destaque, serviços em destaque, diferenciais, depoimentos, galeria e chamada para agendamento |
| `servicos.html` | Banho e tosa, consultas veterinárias, vacinas e medicamentos, rações e acessórios, leva e traz, estética e datas especiais |
| `sobre.html` | História e equipe do petshop |
| `contato.html` | Endereço, mapa, WhatsApp e e-mail |

## Estrutura

```text
.
├── index.html, servicos.html, sobre.html, contato.html
├── css/styles.css        # Estilos do site
├── js/main.js            # Menu mobile, ano no rodapé e links do WhatsApp
├── assets/
│   ├── logo.png          # Logo exibida no cabeçalho
│   ├── favicon.png       # Ícone da aba do navegador
│   ├── apple-touch-icon.png
│   └── images/           # Fotos do site
├── robots.txt
└── sitemap.xml
```

## Tecnologias

- HTML5, CSS3 e JavaScript puro (sem frameworks e sem etapa de build)
- Fontes Google: Baloo 2 e Nunito
- Mapa incorporado do Google Maps

## Como rodar localmente

Basta abrir o `index.html` no navegador. Ou, para servir localmente:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Como publicar

Por ser um site estático, pode ser hospedado em GitHub Pages, Netlify, Vercel ou qualquer hospedagem comum: basta enviar os arquivos da pasta.

## Personalização

- **WhatsApp:** altere `WA_NUMBER` e a mensagem padrão `WA_DEFAULT` no início de `js/main.js`. Qualquer link com o atributo `data-wa` abre o WhatsApp automaticamente (o valor do atributo vira a mensagem).
- **Logo:** substitua `assets/logo.png`. O tamanho no cabeçalho é ajustado em `.logo-mark` em `css/styles.css`.
- **Favicon:** substitua `assets/favicon.png` (64x64) e `assets/apple-touch-icon.png` (180x180).
- **SEO:** títulos, descrições e tags de compartilhamento ficam no `<head>` de cada página; atualize também o `sitemap.xml` ao adicionar páginas.

## Contato

- Endereço: Rua Fernando Costa, 482 — Vila Boa Vista, Presidente Prudente/SP — 19020-570
- WhatsApp: (18) 97400-3443
- E-mail: petshopsato@gmail.com
