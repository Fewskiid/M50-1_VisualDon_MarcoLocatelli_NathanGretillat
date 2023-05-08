import { select, selectAll } from "d3-selection";
import { range } from "d3-array";
import { zoom } from "d3-zoom";
import { easeLinear } from "d3-ease";

d3.json("../statistiques/statistiques.json").then(function (data) {
  let dataJson = data;
  console.log(dataJson);

  const svg = select("svg");
  const ligneDate = select("svg").append("g");
  const cercleDate = select("svg").append("g");
  const texteDate = select("svg").append("g");
  const texteParticipationEquipe = select("svg").append("g");

  ligneDate
    .append("line")
    .attr("class", "lineDate")
    .attr("x1", "200")
    .attr("y1", "100")
    .attr("x2", "200")
    .attr("y2", "3100")
    .attr("stroke", "#000000")
    .attr("stroke-width", "15px");

  // let myZoom = zoom().scaleExtent([0.25, 10]).on("zoom", handleZoom);

  // function handleZoom(e) {
  //   select("svg").attr("transform", e.transform);
  // }

  // function zoomIn() {
  //   select("svg").transition().call(myZoom.scaleBy, 1.25);
  // }

  // function resetZoom() {
  //   select("svg").transition().call(myZoom.scaleTo, 1);
  // }

  const annees = range(1960, 2024, 4);

  for (let i = 105; i <= 3105; i += 200) {
    texteDate
      .append("text")
      .attr("class", "texteDate")
      .attr("font-size", "2em")
      .attr("font-family", "Orbitron")
      .attr("x", "0")
      .attr("y", i);
  }

  for (let i = 0; i <= annees.length - 1; i++) {
    const texte = select(`.texteDate:nth-child(${i + 1})`);
    texte.text(annees[i]);
  }

  svg
    .append("text")
    .attr("class", "titre1")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "400")
    .attr("y", "105")
    .text("Nombre d'équipes ayant participé");

  svg
    .append("text")
    .attr("class", "nombreEquipeParticipe")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "400")
    .attr("y", "155")
    .text(`${dataJson.nombreEquipeParticipe}`);

  let nombreEquipeParticipe =
    dataJson.nombreEquipeParticipe - dataJson.nombreEquipeParticipe;
  const interval = setInterval(() => {
    nombreEquipeParticipe++;
    select(".nombreEquipeParticipe").text(nombreEquipeParticipe);
    if (nombreEquipeParticipe === dataJson.nombreEquipeParticipe) {
      clearInterval(interval);
    }
  }, 2000 / 37);

  svg
    .append("line")
    .attr("class", "ligne1")
    .attr("x1", "400")
    .attr("y1", "200")
    .attr("x2", "400")
    .attr("y2", "200")
    .attr("stroke", "#000000")
    .attr("stroke-width", "2px")
    .transition()
    .duration(2000)
    .attr("x2", "1200");

  svg
    .append("text")
    .attr("class", "titre2")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "400")
    .attr("y", "305")
    .text("Classement des vainqueurs");

  const rect = svg
    .selectAll("rect")
    .data([0, 150, 300, 450])
    .join((enter) => enter.append("rect"))
    .attr("width", "40")
    .attr("height", 0) // Commence avec une taille de 0
    .attr("x", (d, i) => i * 100 + 160) // Commence de droite à gauche
    .attr("y", (d) => 1173) // Commence avec une position y fixe
    .attr("fill", "#143cdb")
    .attr("transform", "rotate(270, 200, 635)")
    .text("test");

  rect
    .transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .attr("height", (d) => d);

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/espagne.svg")
    .attr("height", "50")
    .attr("x", "400")
    .attr("y", "330");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/allemagne.svg")
    .attr("height", "50")
    .attr("x", "510")
    .attr("y", "330");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/france.svg")
    .attr("height", "50")
    .attr("x", "400")
    .attr("y", "430");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/italie.svg")
    .attr("height", "50")
    .attr("x", "510")
    .attr("y", "430");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/paysBas.svg")
    .attr("height", "50")
    .attr("x", "400")
    .attr("y", "530");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/slovaquie.svg")
    .attr("height", "50")
    .attr("x", "510")
    .attr("y", "530");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/portugal.svg")
    .attr("height", "50")
    .attr("x", "400")
    .attr("y", "590");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/urss.svg")
    .attr("height", "50")
    .attr("x", "510")
    .attr("y", "590");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/grece.svg")
    .attr("height", "50")
    .attr("x", "400")
    .attr("y", "650");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/danemark.svg")
    .attr("height", "50")
    .attr("x", "510")
    .attr("y", "650");

  svg
    .append("image")
    .attr("xlink:href", "../img/autres/coupeEuro.png")
    .attr("height", "50")
    .attr("x", "670")
    .attr("y", "330");

  svg
    .append("image")
    .attr("xlink:href", "../img/autres/coupeEuro.png")
    .attr("height", "50")
    .attr("x", "670")
    .attr("y", "430");

  svg
    .append("image")
    .attr("xlink:href", "../img/autres/coupeEuro.png")
    .attr("height", "50")
    .attr("x", "670")
    .attr("y", "530");

  svg
    .append("text")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("y", "630")
    .attr("x", "725")
    .text("0");

  svg
    .append("text")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("y", "630")
    .attr("x", "875")
    .text("1");

  svg
    .append("text")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("y", "630")
    .attr("x", "1025")
    .text("2");

  svg
    .append("text")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("y", "630")
    .attr("x", "1175")
    .text("3");

  svg
    .append("line")
    .attr("class", "ligne2")
    .attr("x1", "400")
    .attr("y1", "745")
    .attr("x2", "400")
    .attr("y2", "745")
    .attr("stroke", "#000000")
    .attr("stroke-width", "2px")
    .transition()
    .duration(2000)
    .attr("x2", "1200")
    .delay(250);

  svg
    .append("text")
    .attr("class", "titre3")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "400")
    .attr("y", "850")
    .text("Nombre de participations par équipes");

  for (let i = 900; i <= 2000; i += 100) {
    texteParticipationEquipe
      .append("text")
      .attr("class", "texteParticipationEquipe")
      .attr("font-size", "2em")
      .attr("font-family", "Orbitron")
      .attr("x", "400")
      .attr("y", i);
  }

  for (let i = 1; i <= 13; i++) {
    const texte = select(`.texteParticipationEquipe:nth-child(${i})`);
    if (i === 1) {
      texte.text(13);
    } else if (i === 2) {
      texte.text(11);
    } else {
      const countdownValue = 12 - i + 1;
      texte.text(countdownValue);
    }
  }

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/allemagne.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "877");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/espagne.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "977");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/italie.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "1077");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/france.svg")
    .attr("height", "50")
    .attr("x", "580")
    .attr("y", "1077");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/paysBas.svg")
    .attr("height", "50")
    .attr("x", "690")
    .attr("y", "1077");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/angleterre.svg")
    .attr("height", "50")
    .attr("x", "800")
    .attr("y", "1077");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/danemark.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "1177");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/portugal.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "1277");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/suede.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "1377");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/republiqueTcheque.svg")
    .attr("height", "50")
    .attr("x", "585")
    .attr("y", "1377");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/belgique.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "1477");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/russie.svg")
    .attr("height", "50")
    .attr("x", "580")
    .attr("y", "1477");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/croatie.svg")
    .attr("height", "50")
    .attr("x", "690")
    .attr("y", "1477");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/urss.svg")
    .attr("height", "50")
    .attr("x", "825")
    .attr("y", "1477");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/turquie.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "1577");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/roumanie.svg")
    .attr("height", "50")
    .attr("x", "580")
    .attr("y", "1577");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/yougoslavie.svg")
    .attr("height", "50")
    .attr("x", "690")
    .attr("y", "1577");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/suisse.svg")
    .attr("height", "50")
    .attr("x", "825")
    .attr("y", "1577");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/grece.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "1677");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/hongrie.svg")
    .attr("height", "50")
    .attr("x", "580")
    .attr("y", "1677");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/pologne.svg")
    .attr("height", "50")
    .attr("x", "690")
    .attr("y", "1677");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/irlande.svg")
    .attr("height", "50")
    .attr("x", "805")
    .attr("y", "1677");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/slovaquie.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "1777");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/ukraine.svg")
    .attr("height", "50")
    .attr("x", "580")
    .attr("y", "1777");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/autriche.svg")
    .attr("height", "50")
    .attr("x", "690")
    .attr("y", "1777");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/ecosse.svg")
    .attr("height", "50")
    .attr("x", "800")
    .attr("y", "1777");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/bulgarie.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "1877");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/paysDeGalles.svg")
    .attr("height", "50")
    .attr("x", "590")
    .attr("y", "1877");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/islande.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "1977");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/norvege.svg")
    .attr("height", "50")
    .attr("x", "575")
    .attr("y", "1977");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/finlande.svg")
    .attr("height", "50")
    .attr("x", "680")
    .attr("y", "1977");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/irlandeDuNord.svg")
    .attr("height", "50")
    .attr("x", "800")
    .attr("y", "1977");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/albanie.svg")
    .attr("height", "50")
    .attr("x", "470")
    .attr("y", "2037");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/lettonie.svg")
    .attr("height", "50")
    .attr("x", "575")
    .attr("y", "2037");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/slovenie.svg")
    .attr("height", "50")
    .attr("x", "710")
    .attr("y", "2037");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/macedoineDuNord.svg")
    .attr("height", "50")
    .attr("x", "845")
    .attr("y", "2037");

  svg
    .append("line")
    .attr("class", "ligne3")
    .attr("x1", "400")
    .attr("y1", "2137")
    .attr("x2", "1200")
    .attr("y2", "2137")
    .attr("stroke", "#000000")
    .attr("stroke-width", "2px");

  svg
    .append("text")
    .attr("class", "titre4")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "400")
    .attr("y", "2242")
    .text("Equipe ayant marqué le plus de buts");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/allemagne.svg")
    .attr("height", "50")
    .attr("x", "400")
    .attr("y", "2292");

  svg
    .append("text")
    .attr("class", "equipePlusMarque")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "515")
    .attr("y", "2327")
    .text(`${dataJson.equipe_plus_marque.nombre_buts}`);

  svg
    .append("text")
    .attr("class", "titre5")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "400")
    .attr("y", "2452")
    .text("Equipe ayant encaissé le plus de buts");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/allemagne.svg")
    .attr("height", "50")
    .attr("x", "400")
    .attr("y", "2502");

  svg
    .append("text")
    .attr("class", "equipePlusEncaisse")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "515")
    .attr("y", "2537")
    .text(`${dataJson.equipe_plus_encaisse.nombre_buts}`);

  svg
    .append("text")
    .attr("class", "titre6")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "400")
    .attr("y", "2662")
    .text("Equipe ayant gagné le plus de matchs");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/allemagne.svg")
    .attr("height", "50")
    .attr("x", "400")
    .attr("y", "2712");

  svg
    .append("text")
    .attr("class", "equipePlusGagne")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "515")
    .attr("y", "2747")
    .text(`${dataJson.equipe_plus_gagne.nombre_victoires}`);

  svg
    .append("text")
    .attr("class", "titre7")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "400")
    .attr("y", "2872")
    .text("Equipe ayant perdu le plus de matchs");

  svg
    .append("image")
    .attr("xlink:href", "../img/drapeaux/danemark.svg")
    .attr("height", "50")
    .attr("x", "400")
    .attr("y", "2922");

  svg
    .append("text")
    .attr("class", "equipePlusPerdu")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "515")
    .attr("y", "2957")
    .text(`${dataJson.equipe_plus_perdu.nombre_defaites}`);

  svg
    .append("text")
    .attr("class", "titre8")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "400")
    .attr("y", "3082")
    .text("Total des buts inscrits");

  svg
    .append("text")
    .attr("class", "equipePlusPerdu")
    .attr("font-size", "2em")
    .attr("font-family", "Orbitron")
    .attr("x", "400")
    .attr("y", "3152")
    .text(`${dataJson.Total_de_buts_marques}`);

  for (let i = 100; i <= 3100; i += 200) {
    cercleDate
      .append("circle")
      .attr("class", `cercleDate`)
      .attr("fill", "#f9bf4b")
      .attr("cx", "200")
      .attr("cy", i)
      .attr("r", "50")
      .on("click", function () {
        if (select(this).attr("fill") === "#143cdb") {
          select(this).attr("fill", "#f9bf4b");
          select("body").select(".overlay-div").remove();
        } else {
          console.log(this);
          select("body").select(".overlay-div").remove();
          selectAll(".cercleDate").attr("fill", "#f9bf4b");
          select(this).attr("fill", "#143cdb");

          // create a new div element
          var overlayDiv = d3
            .select("body")
            .append("div")
            .attr("class", "overlay-div");

          overlayDiv
            .style("position", "absolute")
            .style("left", "430px")
            .style("width", "1300px")
            .style("height", "3200px")
            .style("background-color", "#f0f0f2");

          overlayDiv
            .append("svg")
            .attr("class", "overlay-svg")
            .attr("width", "1300px")
            .attr("height", "100%");

          const overlaySVG = select(".overlay-svg");
          const cercleButs = select(".overlay-svg").append("g");

          if (select(this).attr("cy") === "100") {
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "105")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/france.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "133");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "160")
              .attr("y", "168")
              .text(`${dataJson.participation[0].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "1960")
              .attr("xlink:href", "../img/contoursPays/contourFrance.svg")
              .attr("height", "400")
              .attr("x", "500")
              .attr("y", "60");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "230")
              .attr("y2", "230")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "335")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "323");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");
                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "375px")
                  .text(`${dataJson.participation[0].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "395px")
                  .text(`${dataJson.participation[0].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "415px")
                  .text(`${dataJson.participation[0].anecdote_insolite[2]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "435px")
                  .text(`${dataJson.participation[0].anecdote_insolite[3]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "480")
              .attr("y2", "480")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "585")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "4em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "660")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[0].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 170; i <= 270; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "617");
            }

            for (let i = 170; i <= 270; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "637");
            }

            for (let i = 170; i <= 250; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "657");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "585")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "625")
              .text(`${dataJson.participation[0].meilleur_buteur[0].joueur}`);

            for (let i = 630; i <= 650; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "620")
                .attr("r", "0")
                .transition()
                .duration(2000)
                .attr("r", "7")
                .delay(250);
            }

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "645")
              .text(`${dataJson.participation[0].meilleur_buteur[1].joueur}`);

            for (let i = 625; i <= 645; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "640")
                .attr("r", "0")
                .transition()
                .duration(2000)
                .attr("r", "7")
                .delay(400);
            }

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "665")
              .text(`${dataJson.participation[0].meilleur_buteur[2].joueur}`);

            for (let i = 640; i <= 660; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "660")
                .attr("r", "0")
                .transition()
                .duration(2000)
                .attr("r", "7")
                .delay(550);
            }

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "685")
              .text(`${dataJson.participation[0].meilleur_buteur[3].joueur}`);

            for (let i = 595; i <= 615; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs4")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "680")
                .attr("r", "0")
                .transition()
                .duration(2000)
                .attr("r", "7")
                .delay(700);
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "730")
              .attr("y2", "730")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "835")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "895")
              .text(`${dataJson.participation[0].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/urss.svg")
              .attr("height", "50")
              .attr("x", " 215")
              .attr("y", "860");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "835")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/urss.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "860");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "617")
              .attr("y", "895")
              .text(`${dataJson.participation[0].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/yougoslavie.svg")
              .attr("height", "50")
              .attr("x", "691")
              .attr("y", "860");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo1960.svg")
              .attr("class", "logoEdition")
              .attr("height", "70")
              .attr("x", "300")
              .attr("y", "130");
          }

          if (select(this).attr("cy") === "300") {
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "305")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/espagne.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "333");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "160")
              .attr("y", "368")
              .text(`${dataJson.participation[1].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "1964")
              .attr("xlink:href", "../img/contoursPays/contourEspagne.svg")
              .attr("height", "400")
              .attr("x", "500")
              .attr("y", "215");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "430")
              .attr("y2", "430")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "535")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "523");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "575px")
                  .text(`${dataJson.participation[1].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "595px")
                  .text(`${dataJson.participation[1].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "615px")
                  .text(`${dataJson.participation[1].anecdote_insolite[2]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "635px")
                  .text(`${dataJson.participation[1].anecdote_insolite[3]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "655px")
                  .text(`${dataJson.participation[1].anecdote_insolite[4]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "700")
              .attr("y2", "700")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "805")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "4em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "880")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[1].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 175; i <= 255; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "837")
                .attr("r", "7");
            }

            for (let i = 175; i <= 235; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "857")
                .attr("r", "7");
            }

            for (let i = 175; i <= 235; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "877")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "805")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "845")
              .text(`${dataJson.participation[1].meilleur_buteur[0].joueur}`);

            for (let i = 660; i <= 680; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "840")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "865")
              .text(`${dataJson.participation[1].meilleur_buteur[1].joueur}`);

            for (let i = 608; i <= 608; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "860")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "885")
              .text(`${dataJson.participation[1].meilleur_buteur[2].joueur}`);

            for (let i = 613; i <= 633; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "880")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "930")
              .attr("y2", "930")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1035")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1095")
              .text(`${dataJson.participation[1].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/espagne.svg")
              .attr("height", "50")
              .attr("x", " 241")
              .attr("y", "1060");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "1035")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/espagne.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "1060");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "590")
              .attr("y", "1095")
              .text(`${dataJson.participation[1].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/urss.svg")
              .attr("height", "50")
              .attr("x", "662")
              .attr("y", "1060");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo1964.svg")
              .attr("class", "logoEdition")
              .attr("height", "70")
              .attr("x", "325")
              .attr("y", "330");
          }

          if (select(this).attr("cy") === "500") {
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "505")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/italie.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "533");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "160")
              .attr("y", "568")
              .text(`${dataJson.participation[2].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "1968")
              .attr("xlink:href", "../img/contoursPays/contourItalie.svg")
              .attr("height", "400")
              .attr("x", "500")
              .attr("y", "472");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "630")
              .attr("y2", "630")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "735")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "723");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "775px")
                  .text(`${dataJson.participation[2].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "795px")
                  .text(`${dataJson.participation[2].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "815px")
                  .text(`${dataJson.participation[2].anecdote_insolite[2]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "835px")
                  .text(`${dataJson.participation[2].anecdote_insolite[3]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "880")
              .attr("y2", "880")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "985")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "4em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1060")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[2].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 140; i <= 180; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "1017")
                .attr("r", "7");
            }

            for (let i = 140; i <= 180; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "1037")
                .attr("r", "7");
            }

            for (let i = 140; i <= 140; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "1057")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "985")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "1025")
              .text(`${dataJson.participation[2].meilleur_buteur[0].joueur}`);

            for (let i = 620; i <= 640; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "1020")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "1110")
              .attr("y2", "1110")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1215")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1275")
              .text(`${dataJson.participation[2].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/italie.svg")
              .attr("height", "50")
              .attr("x", " 171")
              .attr("y", "1240");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "1215")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/italie.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "1240");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "590")
              .attr("y", "1275")
              .text(`${dataJson.participation[2].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/urss.svg")
              .attr("height", "50")
              .attr("x", "674")
              .attr("y", "1240");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo1968.svg")
              .attr("class", "logoEdition")
              .attr("height", "70")
              .attr("x", "257")
              .attr("y", "530");
          }

          if (select(this).attr("cy") === "700") {
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "705")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/belgique.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "733");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "160")
              .attr("y", "768")
              .text(`${dataJson.participation[3].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "1972")
              .attr("xlink:href", "../img/contoursPays/contourBelgique.svg")
              .attr("height", "400")
              .attr("x", "500")
              .attr("y", "679");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "830")
              .attr("y2", "830")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "935")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "923");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "975px")
                  .text(`${dataJson.participation[3].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "995px")
                  .text(`${dataJson.participation[3].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1015px")
                  .text(`${dataJson.participation[3].anecdote_insolite[2]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1035px")
                  .text(`${dataJson.participation[3].anecdote_insolite[3]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1055px")
                  .text(`${dataJson.participation[3].anecdote_insolite[4]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "1100")
              .attr("y2", "1100")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1205")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "4em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1280")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[3].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 180; i <= 240; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "1237")
                .attr("r", "7");
            }

            for (let i = 180; i <= 240; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "1257")
                .attr("r", "7");
            }

            for (let i = 180; i <= 200; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "1277")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "1205")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "1245")
              .text(`${dataJson.participation[3].meilleur_buteur[0].joueur}`);

            for (let i = 603; i <= 663; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "1240")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "1330")
              .attr("y2", "1330")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1435")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1495")
              .text(`${dataJson.participation[3].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/allemagne.svg")
              .attr("height", "50")
              .attr("x", " 275")
              .attr("y", "1460");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "1435")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/allemagne.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "1460");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "598")
              .attr("y", "1495")
              .text(`${dataJson.participation[3].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/urss.svg")
              .attr("height", "50")
              .attr("x", "682")
              .attr("y", "1460");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo1972.svg")
              .attr("class", "logoEdition")
              .attr("height", "70")
              .attr("x", "327")
              .attr("y", "730");
          }

          if (select(this).attr("cy") === "900") {
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "905")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/yougoslavie.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "933");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "185")
              .attr("y", "968")
              .text(`${dataJson.participation[4].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "1976")
              .attr("xlink:href", "../img/contoursPays/contourYougoslavie.svg")
              .attr("height", "390")
              .attr("x", "560")
              .attr("y", "855");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "1030")
              .attr("y2", "1030")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1135")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "1123");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1175px")
                  .text(`${dataJson.participation[4].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1195px")
                  .text(`${dataJson.participation[4].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1215px")
                  .text(`${dataJson.participation[4].anecdote_insolite[2]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "1260")
              .attr("y2", "1260")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1365")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "4em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1450")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[4].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 140; i <= 240; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 40)
                .attr("cy", "1407")
                .attr("r", "7");
            }

            for (let i = 140; i <= 240; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i + 40)
                .attr("cy", "1427")
                .attr("r", "7");
            }

            for (let i = 140; i <= 260; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i + 40)
                .attr("cy", "1447")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "1365")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "1405")
              .text(`${dataJson.participation[4].meilleur_buteur[0].joueur}`);

            for (let i = 610; i <= 670; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "1400")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "1490")
              .attr("y2", "1490")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1595")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1655")
              .text(`${dataJson.participation[4].vainqueur}`);

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "1595")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/slovaquie.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "1620");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "590")
              .attr("y", "1655")
              .text(`${dataJson.participation[4].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/allemagne.svg")
              .attr("height", "50")
              .attr("x", "674")
              .attr("y", "1620");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo1976.svg")
              .attr("class", "logoEdition")
              .attr("height", "70")
              .attr("x", "417")
              .attr("y", "930");
          }

          if (select(this).attr("cy") === "1100") {
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1105")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/italie.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "1133");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "160")
              .attr("y", "1168")
              .text(`${dataJson.participation[5].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "1980")
              .attr("xlink:href", "../img/contoursPays/contourItalie.svg")
              .attr("height", "400")
              .attr("x", "500")
              .attr("y", "1068");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "1230")
              .attr("y2", "1230")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1335")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "1323");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1375px")
                  .text(`${dataJson.participation[5].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1395px")
                  .text(`${dataJson.participation[5].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1415px")
                  .text(`${dataJson.participation[5].anecdote_insolite[2]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1435px")
                  .text(`${dataJson.participation[5].anecdote_insolite[3]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1455px")
                  .text(`${dataJson.participation[5].anecdote_insolite[4]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "1500")
              .attr("y2", "1500")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1605")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "4em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1690")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[5].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 140; i <= 300; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "1647")
                .attr("r", "7");
            }

            for (let i = 140; i <= 300; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "1667")
                .attr("r", "7");
            }

            for (let i = 140; i <= 300; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "1687")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "1605")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "1645")
              .text(`${dataJson.participation[5].meilleur_buteur[0].joueur}`);

            for (let i = 605; i <= 645; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "1640")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "1730")
              .attr("y2", "1730")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1835")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1895")
              .text(`${dataJson.participation[5].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/allemagne.svg")
              .attr("height", "50")
              .attr("x", " 290")
              .attr("y", "1860");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "1835")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/allemagne.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "1860");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "600")
              .attr("y", "1895")
              .text(`${dataJson.participation[5].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/belgique.svg")
              .attr("height", "50")
              .attr("x", "674")
              .attr("y", "1860");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo1980.svg")
              .attr("class", "logoEdition")
              .attr("height", "70")
              .attr("x", "255")
              .attr("y", "1130");
          }

          if (select(this).attr("cy") === "1300") {
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1305")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/france.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "1333");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "160")
              .attr("y", "1368")
              .text(`${dataJson.participation[6].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "1984")
              .attr("xlink:href", "../img/contoursPays/contourFrance.svg")
              .attr("height", "400")
              .attr("x", "500")
              .attr("y", "1268");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "1430")
              .attr("y2", "1430")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1535")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "1523");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1575px")
                  .text(`${dataJson.participation[6].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1595px")
                  .text(`${dataJson.participation[6].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1615px")
                  .text(`${dataJson.participation[6].anecdote_insolite[2]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "1660")
              .attr("y2", "1660")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1765")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "6em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1870")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[6].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 140; i <= 320; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "1807")
                .attr("r", "7");
            }

            for (let i = 140; i <= 320; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "1827")
                .attr("r", "7");
            }

            for (let i = 140; i <= 320; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "1847")
                .attr("r", "7");
            }

            for (let i = 140; i <= 340; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs4")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "1867")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "1765")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "1805")
              .text(`${dataJson.participation[6].meilleur_buteur[0].joueur}`);

            for (let i = 605; i <= 785; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 10)
                .attr("cy", "1800")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "1920")
              .attr("y2", "1920")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1995")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2055")
              .text(`${dataJson.participation[6].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/france.svg")
              .attr("height", "50")
              .attr("x", " 215")
              .attr("y", "2020");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "1995")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/france.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "2020");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "590")
              .attr("y", "2055")
              .text(`${dataJson.participation[6].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/espagne.svg")
              .attr("height", "50")
              .attr("x", "674")
              .attr("y", "2020");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo1984.svg")
              .attr("class", "logoEdition")
              .attr("height", "70")
              .attr("x", "300")
              .attr("y", "1330");
          }

          if (select(this).attr("cy") === "1500") {
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1505")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/allemagne.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "1533");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "175")
              .attr("y", "1568")
              .text(`${dataJson.participation[7].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "1988")
              .attr("xlink:href", "../img/contoursPays/contourAllemagne.svg")
              .attr("height", "400")
              .attr("x", "500")
              .attr("y", "1468");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "1630")
              .attr("y2", "1630")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1735")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "1723");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1775px")
                  .text(`${dataJson.participation[7].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1795px")
                  .text(`${dataJson.participation[7].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1815px")
                  .text(`${dataJson.participation[7].anecdote_insolite[2]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "1860")
              .attr("y2", "1860")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1965")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "4em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2050")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[7].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 140; i <= 340; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "2007")
                .attr("r", "7");
            }

            for (let i = 140; i <= 340; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "2027")
                .attr("r", "7");
            }

            for (let i = 140; i <= 360; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "2047")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "1965")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "2005")
              .text(`${dataJson.participation[7].meilleur_buteur[0].joueur}`);

            for (let i = 605; i <= 685; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 40)
                .attr("cy", "2000")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "2090")
              .attr("y2", "2090")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2195")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2255")
              .text(`${dataJson.participation[7].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/PaysBas.svg")
              .attr("height", "50")
              .attr("x", " 265")
              .attr("y", "2220");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "2195")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/PaysBas.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "2220");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "590")
              .attr("y", "2255")
              .text(`${dataJson.participation[7].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/urss.svg")
              .attr("height", "50")
              .attr("x", "674")
              .attr("y", "2220");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo1988.svg")
              .attr("class", "logoEdition")
              .attr("height", "70")
              .attr("x", "380")
              .attr("y", "1530");
          }

          if (select(this).attr("cy") === "1700") {
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1705")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/suede.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "1733");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "175")
              .attr("y", "1768")
              .text(`${dataJson.participation[8].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "1992")
              .attr("xlink:href", "../img/contoursPays/contourSuede.svg")
              .attr("height", "400")
              .attr("x", "600")
              .attr("y", "1668");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "1830")
              .attr("y2", "1830")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1935")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "1923");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1975px")
                  .text(`${dataJson.participation[8].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "1995px")
                  .text(`${dataJson.participation[8].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2015px")
                  .text(`${dataJson.participation[8].anecdote_insolite[2]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "2060")
              .attr("y2", "2060")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2165")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "4em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2250")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[8].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 140; i <= 340; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "2207")
                .attr("r", "7");
            }

            for (let i = 140; i <= 340; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "2227")
                .attr("r", "7");
            }

            for (let i = 140; i <= 320; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "2247")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "2165")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "2205")
              .text(`${dataJson.participation[8].meilleur_buteur[0].joueur}`);

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "2225")
              .text(`${dataJson.participation[8].meilleur_buteur[1].joueur}`);

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "2245")
              .text(`${dataJson.participation[8].meilleur_buteur[2].joueur}`);

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "500")
              .attr("y", "2265")
              .text(`${dataJson.participation[8].meilleur_buteur[3].joueur}`);

            for (let i = 605; i <= 645; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 40)
                .attr("cy", "2200")
                .attr("r", "7");
            }

            for (let i = 605; i <= 645; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i + 10)
                .attr("cy", "2220")
                .attr("r", "7");
            }

            for (let i = 605; i <= 645; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i + 40)
                .attr("cy", "2240")
                .attr("r", "7");
            }

            for (let i = 605; i <= 645; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs4")
                .attr("fill", "#000")
                .attr("cx", i + 5)
                .attr("cy", "2260")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "2350")
              .attr("y2", "2350")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2455")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2515")
              .text(`${dataJson.participation[8].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Danemark.svg")
              .attr("height", "50")
              .attr("x", " 265")
              .attr("y", "2485");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "2460")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Danemark.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "2485");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "583")
              .attr("y", "2515")
              .text(`${dataJson.participation[8].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/allemagne.svg")
              .attr("height", "50")
              .attr("x", "674")
              .attr("y", "2485");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo1992.svg")
              .attr("class", "logoEdition")
              .attr("height", "70")
              .attr("x", "305")
              .attr("y", "1730");
          }

          if (select(this).attr("cy") === "1900") {
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "1905")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/angleterre.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "1933");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "175")
              .attr("y", "1968")
              .text(`${dataJson.participation[9].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "1996")
              .attr("xlink:href", "../img/contoursPays/contourAngleterre.svg")
              .attr("height", "400")
              .attr("x", "600")
              .attr("y", "1868");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "2030")
              .attr("y2", "2030")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2135")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "2123");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2175px")
                  .text(`${dataJson.participation[9].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2195px")
                  .text(`${dataJson.participation[9].anecdote_insolite[1]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "2240")
              .attr("y2", "2240")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2345")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "6em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2451")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[9].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 180; i <= 500; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 75)
                .attr("cy", "2387")
                .attr("r", "7");
            }

            for (let i = 180; i <= 500; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i + 75)
                .attr("cy", "2407")
                .attr("r", "7");
            }

            for (let i = 180; i <= 500; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i + 75)
                .attr("cy", "2427")
                .attr("r", "7");
            }

            for (let i = 180; i <= 500; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs4")
                .attr("fill", "#000")
                .attr("cx", i + 75)
                .attr("cy", "2447")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "600")
              .attr("y", "2345")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "600")
              .attr("y", "2385")
              .text(`${dataJson.participation[9].meilleur_buteur[0].joueur}`);

            for (let i = 625; i <= 705; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 85)
                .attr("cy", "2380")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "2537")
              .attr("y2", "2537")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2642")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2702")
              .text(`${dataJson.participation[9].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Allemagne.svg")
              .attr("height", "50")
              .attr("x", " 270")
              .attr("y", "2667");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "2642")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Allemagne.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "2667");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "600")
              .attr("y", "2702")
              .text(`${dataJson.participation[9].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/republiqueTcheque.svg")
              .attr("height", "50")
              .attr("x", "674")
              .attr("y", "2667");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo1996.svg")
              .attr("class", "logoEdition")
              .attr("height", "90")
              .attr("x", "387")
              .attr("y", "1930");
          }

          if (select(this).attr("cy") === "2100") {
            overlayDiv.style("height", "3400px");
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2105")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Belgique.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "2133");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "164")
              .attr("y", "2172")
              .text(`${dataJson.participation[10].pays_organisateur[0]}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "2000")
              .attr("xlink:href", "../img/contoursPays/contourBelgique.svg")
              .attr("height", "200")
              .attr("x", "500")
              .attr("y", "2130");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/PaysBas.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "2203");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "164")
              .attr("y", "2238")
              .text(`${dataJson.participation[10].pays_organisateur[1]}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "2000")
              .attr("xlink:href", "../img/contoursPays/contourPaysBas.svg")
              .attr("height", "250")
              .attr("x", "500")
              .attr("y", "2350");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "2300")
              .attr("y2", "2300")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2405")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "2392");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2445px")
                  .text(`${dataJson.participation[10].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2465px")
                  .text(`${dataJson.participation[10].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2485px")
                  .text(`${dataJson.participation[10].anecdote_insolite[2]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2505px")
                  .text(`${dataJson.participation[10].anecdote_insolite[3]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "2550")
              .attr("y2", "2550")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2655")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "6em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2773")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[10].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 140; i <= 460; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 105)
                .attr("cy", "2697")
                .attr("r", "7");
            }

            for (let i = 140; i <= 460; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i + 105)
                .attr("cy", "2717")
                .attr("r", "7");
            }

            for (let i = 140; i <= 460; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i + 105)
                .attr("cy", "2737")
                .attr("r", "7");
            }

            for (let i = 140; i <= 460; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs4")
                .attr("fill", "#000")
                .attr("cx", i + 105)
                .attr("cy", "2757")
                .attr("r", "7");
            }
            for (let i = 140; i <= 460; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs5")
                .attr("fill", "#000")
                .attr("cx", i + 105)
                .attr("cy", "2777")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "600")
              .attr("y", "2655")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "600")
              .attr("y", "2695")
              .text(`${dataJson.participation[10].meilleur_buteur[0].joueur}`);

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "600")
              .attr("y", "2715")
              .text(`${dataJson.participation[10].meilleur_buteur[1].joueur}`);

            for (let i = 605; i <= 685; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 120)
                .attr("cy", "2690")
                .attr("r", "7");
            }

            for (let i = 605; i <= 685; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i + 120)
                .attr("cy", "2710")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "2867")
              .attr("y2", "2867")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2972")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3032")
              .text(`${dataJson.participation[10].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/France.svg")
              .attr("height", "50")
              .attr("x", " 215")
              .attr("y", "2997");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "2972")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/France.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "2997");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "595")
              .attr("y", "3032")
              .text(`${dataJson.participation[10].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Italie.svg")
              .attr("height", "50")
              .attr("x", "674")
              .attr("y", "2997");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo2000.svg")
              .attr("class", "logoEdition")
              .attr("height", "90")
              .attr("x", "372")
              .attr("y", "2195");
          }

          if (select(this).attr("cy") === "2300") {
            overlayDiv.style("height", "3600px");
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2305")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Portugal.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "2333");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "175")
              .attr("y", "2368")
              .text(`${dataJson.participation[11].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "2004")
              .attr("xlink:href", "../img/contoursPays/contourPortugal.svg")
              .attr("height", "550")
              .attr("x", "500")
              .attr("y", "2268");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "2430")
              .attr("y2", "2430")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2535")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "2523");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2575px")
                  .text(`${dataJson.participation[11].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2595px")
                  .text(`${dataJson.participation[11].anecdote_insolite[1]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "2640")
              .attr("y2", "2640")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2745")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "6em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2851")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[11].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 160; i <= 520; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "2787")
                .attr("r", "7");
            }

            for (let i = 160; i <= 520; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "2807")
                .attr("r", "7");
            }

            for (let i = 160; i <= 520; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "2827")
                .attr("r", "7");
            }

            for (let i = 160; i <= 540; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs4")
                .attr("fill", "#000")
                .attr("cx", i + 60)
                .attr("cy", "2847")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2947")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "70")
              .attr("y", "2977")
              .text(`${dataJson.participation[11].meilleur_buteur[0].joueur}`);

            for (let i = 75; i <= 155; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i + 100)
                .attr("cy", "2972")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "3020")
              .attr("y2", "3020")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3125")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3185")
              .text(`${dataJson.participation[11].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Grece.svg")
              .attr("height", "50")
              .attr("x", " 200")
              .attr("y", "3150");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "3125")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Grece.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "3150");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "595")
              .attr("y", "3185")
              .text(`${dataJson.participation[11].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Portugal.svg")
              .attr("height", "50")
              .attr("x", "674")
              .attr("y", "3150");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo2004.svg")
              .attr("class", "logoEdition")
              .attr("height", "90")
              .attr("x", "352")
              .attr("y", "2330");
          }

          if (select(this).attr("cy") === "2500") {
            overlayDiv.style("height", "3800px");
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2505")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Autriche.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "2533");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "158")
              .attr("y", "2568")
              .text(`${dataJson.participation[12].pays_organisateur[0]}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "2008")
              .attr("xlink:href", "../img/contoursPays/contourAutriche.svg")
              .attr("height", "300")
              .attr("x", "500")
              .attr("y", "2405");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Suisse.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "2600");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "132")
              .attr("y", "2635")
              .text(`${dataJson.participation[12].pays_organisateur[1]}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "2008")
              .attr("xlink:href", "../img/contoursPays/contourSuisse.svg")
              .attr("height", "300")
              .attr("x", "500")
              .attr("y", "2600");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "2695")
              .attr("y2", "2695")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2800")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "2788");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2840px")
                  .text(`${dataJson.participation[12].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2860px")
                  .text(`${dataJson.participation[12].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "2880px")
                  .text(`${dataJson.participation[12].anecdote_insolite[2]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "2925")
              .attr("y2", "2925")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3030")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "6em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3126")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[12].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 225; i <= 605; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3062")
                .attr("r", "7");
            }

            for (let i = 225; i <= 585; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3082")
                .attr("r", "7");
            }

            for (let i = 225; i <= 585; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3102")
                .attr("r", "7");
            }

            for (let i = 225; i <= 585; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs4")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3122")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3190")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "70")
              .attr("y", "3230")
              .text(`${dataJson.participation[12].meilleur_buteur[0].joueur}`);

            for (let i = 161; i <= 221; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3225")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "3274")
              .attr("y2", "3274")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3379")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3440")
              .text(`${dataJson.participation[12].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/espagne.svg")
              .attr("height", "50")
              .attr("x", "240")
              .attr("y", "3405");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "3379")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/espagne.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "3405");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "593")
              .attr("y", "3440")
              .text(`${dataJson.participation[12].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/allemagne.svg")
              .attr("height", "50")
              .attr("x", "667")
              .attr("y", "3405");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo2008.svg")
              .attr("class", "logoEdition")
              .attr("height", "90")
              .attr("x", "270")
              .attr("y", "2595");
          }

          if (select(this).attr("cy") === "2700") {
            overlayDiv.style("height", "4100px");
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2705")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Pologne.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "2733");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "164")
              .attr("y", "2768")
              .text(`${dataJson.participation[13].pays_organisateur[0]}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "2012")
              .attr("xlink:href", "../img/contoursPays/contourPologne.svg")
              .attr("height", "200")
              .attr("x", "500")
              .attr("y", "2670");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/Ukraine.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "2800");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "158")
              .attr("y", "2835")
              .text(`${dataJson.participation[13].pays_organisateur[1]}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "2012")
              .attr("xlink:href", "../img/contoursPays/contourUkraine.svg")
              .attr("height", "200")
              .attr("x", "500")
              .attr("y", "2860");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "2895")
              .attr("y2", "2895")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3000")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "2988");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3045px")
                  .text(`${dataJson.participation[13].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3065px")
                  .text(`${dataJson.participation[13].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3085px")
                  .text(`${dataJson.participation[13].anecdote_insolite[2]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3105px")
                  .text(`${dataJson.participation[13].anecdote_insolite[3]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3125px")
                  .text(`${dataJson.participation[13].anecdote_insolite[4]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "3170")
              .attr("y2", "3170")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3275")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "6em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3371")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[13].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 240; i <= 600; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3307")
                .attr("r", "7");
            }

            for (let i = 240; i <= 600; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3327")
                .attr("r", "7");
            }

            for (let i = 240; i <= 600; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3347")
                .attr("r", "7");
            }

            for (let i = 240; i <= 600; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs4")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3367")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3435")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "70")
              .attr("y", "3475")
              .text(`${dataJson.participation[13].meilleur_buteur[0].joueur}`);

            for (let i = 204; i <= 244; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3470")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "70")
              .attr("y", "3495")
              .text(`${dataJson.participation[13].meilleur_buteur[1].joueur}`);

            for (let i = 182; i <= 222; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3490")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "300")
              .attr("y", "3475")
              .text(`${dataJson.participation[13].meilleur_buteur[2].joueur}`);

            for (let i = 438; i <= 478; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3470")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "300")
              .attr("y", "3495")
              .text(`${dataJson.participation[13].meilleur_buteur[3].joueur}`);

            for (let i = 418; i <= 458; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs4")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3490")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "535")
              .attr("y", "3475")
              .text(`${dataJson.participation[13].meilleur_buteur[4].joueur}`);

            for (let i = 680; i <= 720; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs5")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3470")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "535")
              .attr("y", "3495")
              .text(`${dataJson.participation[13].meilleur_buteur[5].joueur}`);

            for (let i = 652; i <= 692; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs6")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3490")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "3540")
              .attr("y2", "3540")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3645")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3705")
              .text(`${dataJson.participation[13].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/espagne.svg")
              .attr("height", "50")
              .attr("x", "241")
              .attr("y", "3670");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "3645")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/espagne.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "3670");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "592")
              .attr("y", "3705")
              .text(`${dataJson.participation[13].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/italie.svg")
              .attr("height", "50")
              .attr("x", "674")
              .attr("y", "3670");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo2012.svg")
              .attr("class", "logoEdition")
              .attr("height", "90")
              .attr("x", "320")
              .attr("y", "2795");
          }

          if (select(this).attr("cy") === "2900") {
            overlayDiv.style("height", "4200px");
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "2905")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/France.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "2933");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "160")
              .attr("y", "2968")
              .text(`${dataJson.participation[14].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "2016")
              .attr("xlink:href", "../img/contoursPays/contourFrance.svg")
              .attr("height", "400")
              .attr("x", "500")
              .attr("y", "2860");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "3030")
              .attr("y2", "3030")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3135")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "3123");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3175px")
                  .text(`${dataJson.participation[14].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3195px")
                  .text(`${dataJson.participation[14].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3215px")
                  .text(`${dataJson.participation[14].anecdote_insolite[2]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "3260")
              .attr("y2", "3260")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3365")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "6em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3461")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[14].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 295; i <= 815; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3397")
                .attr("r", "7");
            }

            for (let i = 295; i <= 815; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3417")
                .attr("r", "7");
            }

            for (let i = 295; i <= 815; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3437")
                .attr("r", "7");
            }

            for (let i = 295; i <= 815; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs4")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3457")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3525")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "70")
              .attr("y", "3565")
              .text(`${dataJson.participation[14].meilleur_buteur[0].joueur}`);

            for (let i = 224; i <= 324; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3560")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "3609")
              .attr("y2", "3609")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3714")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3775")
              .text(`${dataJson.participation[14].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/portugal.svg")
              .attr("height", "50")
              .attr("x", "238")
              .attr("y", "3740");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "3714")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/portugal.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "3740");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "593")
              .attr("y", "3775")
              .text(`${dataJson.participation[14].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/france.svg")
              .attr("height", "50")
              .attr("x", "667")
              .attr("y", "3740");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo2016.svg")
              .attr("class", "logoEdition")
              .attr("height", "90")
              .attr("x", "310")
              .attr("y", "2930");
          }

          if (select(this).attr("cy") === "3100") {
            overlayDiv.style("height", "4400px");
            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3105")
              .text("Pays organisateur");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/unionEuropeenne.svg")
              .attr("height", "50")
              .attr("x", " 70")
              .attr("y", "3133");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "160")
              .attr("y", "3168")
              .text(`${dataJson.participation[15].pays_organisateur}`);

            overlaySVG
              .append("image")
              .attr("class", "contourPays")
              .attr("data-year", "2020")
              .attr("xlink:href", "../img/contoursPays/contourEurope.svg")
              .attr("height", "420")
              .attr("x", "540")
              .attr("y", "3075");

            overlaySVG
              .append("line")
              .attr("class", "ligne4")
              .attr("x1", "70")
              .attr("y1", "3230")
              .attr("y2", "3230")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3335")
              .text("Anecdote");

            overlaySVG
              .append("circle")
              .attr("class", "AnecdotePoint")
              .attr("fill", "#f9bf4b")
              .attr("cx", "270")
              .attr("cy", "3323");

            let clicked = false;
            select(".AnecdotePoint").on("click", function () {
              if (clicked === false) {
                select(".AnecdotePoint").attr("fill", "#143cdb");

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3375px")
                  .text(`${dataJson.participation[15].anecdote_insolite[0]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3395px")
                  .text(`${dataJson.participation[15].anecdote_insolite[1]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3415px")
                  .text(`${dataJson.participation[15].anecdote_insolite[2]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3435px")
                  .text(`${dataJson.participation[15].anecdote_insolite[3]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3455px")
                  .text(`${dataJson.participation[15].anecdote_insolite[4]}`);

                overlaySVG
                  .append("text")
                  .attr("class", "AnecdoteText")
                  .attr("font-size", "1em")
                  .attr("font-family", "Arial")
                  .attr("x", "70px")
                  .attr("y", "3475px")
                  .text(`${dataJson.participation[15].anecdote_insolite[5]}`);

                selectAll(".AnecdoteText")
                  .style("opacity", "0")
                  .transition()
                  .duration(500)
                  .style("opacity", "1");

                clicked = true;
              } else {
                selectAll(".AnecdoteText").remove();
                select(".AnecdotePoint").attr("fill", "#f9bf4b");
                clicked = false;
              }
            });

            overlaySVG
              .append("line")
              .attr("class", "ligne5")
              .attr("x1", "70")
              .attr("y1", "3520")
              .attr("y2", "3520")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3625")
              .text("Nombre de buts");

            const textNode = overlaySVG
              .append("text")
              .attr("font-size", "6em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3721")
              .text("0"); // Définir le nombre initial à 0

            textNode
              .transition() // Ajouter une transition sur le texte
              .duration(2000) // Définir la durée de la transition en millisecondes
              .tween("text", function () {
                // Utiliser la méthode tween() pour interpoler les valeurs de 0 à nombre_buts
                const finalValue = dataJson.participation[15].nombre_buts; // Définir la valeur finale à partir des données JSON
                const interpolator = d3.interpolateNumber(0, finalValue); // Créer un interpolateur de nombres de 0 à la valeur finale
                return function (t) {
                  // Utiliser la fonction de rappel pour mettre à jour la valeur du texte à chaque étape de la transition
                  const interpolatedValue = Math.round(interpolator(t)); // Arrondir la valeur interpolée à un nombre entier
                  this.textContent = interpolatedValue; // Mettre à jour le texte du nœud text SVG
                };
              });

            for (let i = 285; i <= 985; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3657")
                .attr("r", "7");
            }

            for (let i = 285; i <= 985; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs2")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3677")
                .attr("r", "7");
            }

            for (let i = 285; i <= 965; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs3")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3697")
                .attr("r", "7");
            }

            for (let i = 285; i <= 965; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs4")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3717")
                .attr("r", "7");
            }

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3785")
              .text("Meilleur(s) buteur(s)");

            overlaySVG
              .append("text")
              .attr("font-size", "1em")
              .attr("font-family", "Arial")
              .attr("x", "70")
              .attr("y", "3825")
              .text(`${dataJson.participation[15].meilleur_buteur[0].joueur}`);

            for (let i = 216; i <= 296; i += 20) {
              cercleButs
                .append("circle")
                .attr("class", "cercleButs1")
                .attr("fill", "#000")
                .attr("cx", i)
                .attr("cy", "3820")
                .attr("r", "7");
            }

            overlaySVG
              .append("line")
              .attr("class", "ligne6")
              .attr("x1", "70")
              .attr("y1", "3869")
              .attr("y2", "3869")
              .attr("stroke", "#000000")
              .attr("stroke-width", "2px");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "3974")
              .text("Vainqueur");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "70")
              .attr("y", "4035")
              .text(`${dataJson.participation[15].vainqueur}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/italie.svg")
              .attr("height", "50")
              .attr("x", "170")
              .attr("y", "4000");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "500")
              .attr("y", "3974")
              .text("Finale");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/italie.svg")
              .attr("height", "50")
              .attr("x", "500")
              .attr("y", "4000");

            overlaySVG
              .append("text")
              .attr("font-size", "2em")
              .attr("font-family", "Orbitron")
              .attr("x", "593")
              .attr("y", "4035")
              .text(`${dataJson.participation[15].resultat_finale}`);

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/drapeaux/angleterre.svg")
              .attr("height", "50")
              .attr("x", "682")
              .attr("y", "4000");

            overlaySVG
              .append("image")
              .attr("xlink:href", "../img/logosEditionsEuro/logo2020.svg")
              .attr("class", "logoEdition")
              .attr("height", "90")
              .attr("x", "497")
              .attr("y", "3120");
          }
        }
        selectAll(".ligne4")
          .attr("x2", "70")
          .transition()
          .duration(2000)
          .attr("x2", "450");

        selectAll(".ligne5")
          .attr("x2", "70")
          .transition()
          .duration(2000)
          .attr("x2", "450")
          .delay(250);

        selectAll(".ligne6")
          .attr("x2", "70")
          .transition()
          .duration(2000)
          .attr("x2", "900")
          .delay(400);

        selectAll(".contourPays")
          .style("opacity", "0")
          .transition()
          .duration(2000)
          .style("opacity", "1");

        const logos = selectAll(".logoEdition");
        logos.style("opacity", "0");

        logos.on("mouseover", function () {
          let opacity = +select(this).style("opacity") + 0.1;
          if (opacity > 1) {
            opacity = 1;
          }
          select(this).style("opacity", `${opacity}`);
        });

        selectAll(".AnecdotePoint")
          .attr("r", "0")
          .transition()
          .attr("r", "20")
          .duration(2000);

        selectAll(".cercleButs1")
          .attr("r", "0")
          .transition()
          .duration(2000)
          .attr("r", "7")
          .delay(250);

        selectAll(".cercleButs2")
          .attr("r", "0")
          .transition()
          .duration(2000)
          .attr("r", "7")
          .delay(400);

        selectAll(".cercleButs3")
          .attr("r", "0")
          .transition()
          .duration(2000)
          .attr("r", "7")
          .delay(550);

        selectAll(".cercleButs4")
          .attr("r", "0")
          .transition()
          .duration(2000)
          .attr("r", "7")
          .delay(700);

        selectAll(".cercleButs5")
          .attr("r", "0")
          .transition()
          .duration(2000)
          .attr("r", "7")
          .delay(850);

        selectAll(".cercleButs6")
          .attr("r", "0")
          .transition()
          .duration(2000)
          .attr("r", "7")
          .delay(1000);
      });
  }
});
