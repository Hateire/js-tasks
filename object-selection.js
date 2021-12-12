const wizards = [
    {name:"Ronald", power: 322},
    {name:"Hermione", power: 1488},
    {name:"Harry", power: 2999},
];

    const getWorthyWizards = (wizardsArr) => {
        const worthyWizards = [];

        wizardsArr.forEach(currentWizard => {
            if (currentWizard.power > 1000) {
                worthyWizards.push(currentWizard.name)
            }
        })

        return worthyWizards;
        
        // for (let i = 0; i < wizardsArr.length; i++) {
        //     const currentWizard = wizardsArr[i];

        //     if (currentWizard.power > 1000) {
        //         worthyWizards.push(currentWizard.name);
        //     }
        // }

        
    };

    console.log(getWorthyWizards(wizards));