const spaceships = [];
function saveSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada.`);
}
function addCrewMember(name, nacionalidade, spaceship) {
    const crewMember = {
        name,
        nacionalidade
    };
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${name} não pode ser adicionado à tripulação. Limite atingido.`);
    }
    else {
        spaceship.crew.push(crewMember);
        alert(`${name} foi adicionado à tripulação da ${spaceship.name}`);
    }
}
function sendOnMission(spaceship) {
    if (spaceship.inMission == true) {
        alert(`${spaceship.name} já está em missão!`);
    }
    else if (spaceship.crew.length < (spaceship.crewLimit / 3)) {
        alert(`A ${spaceship.name} não pode sair em missão sem ter pelo menos 1/3 da tripulação!`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} foi enviado em uma missão!`);
    }
}
function firstMenuOption() {
    const name = prompt('Qual é o nome da nave a ser registrada?');
    const pilot = prompt(`Qual é o nome do piloto da ${name}`);
    const crewLimit = Number.parseInt(prompt(`Quantos tripulantes a ${name} suporta?`));
    const confirmation = confirm(`Confirma o registro da nave ${name}?\nPiloto: ${pilot}\nTamanho da Tripulação: ${crewLimit}`);
    if (confirmation) {
        saveSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    const name = prompt('Qual é o nome do tripulante?');
    const nacionalidade = prompt('Qual a nacionalidade do tripulante?');
    const spaceshipName = prompt(`Para qual nave ${name} deverá ser designado?`);
    const spaceship = spaceships.find(ship => ship.name === spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${name} na tripulação da ${spaceship.name}?`);
        if (confirmation) {
            addCrewMember(name, nacionalidade, spaceship);
        }
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada?');
    const spaceship = spaceships.find(ship => ship.name === spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`);
        if (confirmation) {
            sendOnMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    let list = 'Naves Registradas:\n';
    spaceships.forEach((spaceship) => {
        list += `
        Nave: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
        Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
        Tripulantes: ${spaceship.crew.length}
      `;
        spaceship.crew.forEach(member => {
            list += `    - ${member.name}\n`;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
