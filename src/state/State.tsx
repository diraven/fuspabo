import ICase from "./Case";
import IRat from "./Rat";

export interface IState {
    messages: string[]
    cases: ICase[]
    rats: IRat[]
}

const State: IState = {
    messages: [
        'msg1',
        'msg2',
        'msg2',
        'msg2',
        'msg2',
        'msg2',
        'msg2',
        'msg2',
        'msg---- #1 #2',
        '#1 msg1',
        '#2 msg2',
        'Divine Raven msg2 Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2',
        'Divine Raven msg2 Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2',
        'Divine Raven msg2 Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2',
        'Divine Raven msg2 Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2Divine Raven msg2',
        'Divine Raven msg2',
    ],
    cases: [
        {
            caseNumber: 1,
            cmdr: 'Divine Raven',
            ircNick: 'Divine_Raven',
            systemName: 'Fuelum 123',
            systemLandmark: '',
            language: 'EN',
            platform: 'PC',
            cr: true,
        },
        {
            caseNumber: 1,
            cmdr: 'Divine Raven',
            ircNick: 'Divine_Raven',
            systemName: 'Fuelum 123',
            systemLandmark: '',
            language: 'EN',
            platform: 'PC',
            cr: true,
        },
        {
            caseNumber: 1,
            cmdr: 'Divine Raven',
            ircNick: 'Divine_Raven',
            systemName: 'Fuelum 123',
            systemLandmark: '',
            language: 'EN',
            platform: 'PC',
            cr: true,
        },
        {
            caseNumber: 1,
            cmdr: 'Divine Raven',
            ircNick: 'Divine_Raven',
            systemName: 'Fuelum 123',
            systemLandmark: '',
            language: 'EN',
            platform: 'PC',
            cr: true,
        },
        {
            caseNumber: 1,
            cmdr: 'Divine Raven',
            ircNick: 'Divine_Raven',
            systemName: 'Fuelum 123',
            systemLandmark: '',
            language: 'EN',
            platform: 'PC',
            cr: true,
        },
        {
            caseNumber: 1,
            cmdr: 'Divine Raven',
            ircNick: 'Divine_Raven',
            systemName: 'Fuelum 123',
            systemLandmark: '',
            language: 'EN',
            platform: 'PC',
            cr: true,
        },
        {
            caseNumber: 1,
            cmdr: 'Divine Raven',
            ircNick: 'Divine_Raven',
            systemName: 'Fuelum 123',
            systemLandmark: '',
            language: 'EN',
            platform: 'PC',
            cr: true,
        },
        {
            caseNumber: 1,
            cmdr: 'Divine Raven',
            ircNick: 'Divine_Raven',
            systemName: 'Fuelum 123',
            systemLandmark: '',
            language: 'EN',
            platform: 'PC',
            cr: true,
        },
        {
            caseNumber: 1,
            cmdr: 'Divine Raven',
            ircNick: 'Divine_Raven',
            systemName: 'Fuelum 123',
            systemLandmark: '',
            language: 'EN',
            platform: 'PC',
            cr: true,
        },
        {
            caseNumber: 2,
            cmdr: 'Some Client',
            ircNick: 'Some_Client',
            systemName: 'Sol',
            systemLandmark: '321ly from Fuelum',
            language: 'CH',
            platform: 'XB',
            cr: false,
        },
    ],
    rats: [
        {
            caseNumber: 1,
            cmdr: 'Some Rat 1',
            ircNick: 'Rat_1',
            fr: true,
            mmc: null,
            wr: false,
            sys: null,
            pos: null,
            bc: null,
            fuel: null,
        },
        {
            caseNumber: 1,
            cmdr: 'Some Rat 2',
            ircNick: 'Rat_2',
            fr: true,
            mmc: null,
            wr: true,
            sys: null,
            pos: null,
            bc: false,
            fuel: null,
        },
        {
            caseNumber: 2,
            cmdr: 'Some Rat 3',
            ircNick: 'Rat_3',
            fr: true,
            mmc: null,
            wr: true,
            sys: null,
            pos: null,
            bc: null,
            fuel: null,
        },
        {
            caseNumber: 2,
            cmdr: 'Some Rat 4',
            ircNick: 'Rat_4',
            fr: true,
            mmc: null,
            wr: true,
            sys: null,
            pos: null,
            bc: null,
            fuel: null,
        },
    ]
};

export default State;
