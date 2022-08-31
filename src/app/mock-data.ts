import { License } from "./interfaces/license";
import { Producer } from "./interfaces/producer";


export const PRODUCERS: Producer[] = [
  { id: `12`, name: 'Dr. Nice' },
  { id: `13`, name: 'Bombasto' },
  { id: `14`, name: 'Celeritas' },
  { id: `15`, name: 'Magneta' },
  { id: `16`, name: 'RubberMan' },
  { id: `17`, name: 'Dynama' },
  { id: `18`, name: 'Dr. IQ' },
  { id: `19`, name: 'Magma' },
  { id: `20`, name: 'Tornado' }
];

export const LICENSES: License[] = [
  {id: `101`, name: `windows 10 pro`, key: `350 RON`, producerId: `12`},
  {id: `102`, name: `windows 8 pro`, key: `300 RON`, producerId: `12`},
  {id: `103`, name: `windows 10 home`, key: `400 RON`, producerId: `12`},
  {id: `104`, name: `windows 11 pro`, key: `450 RON`, producerId: `12`},
  {id: `105`, name: `ubuntu 20`, key: `10 RON`, producerId: `14`},
  {id: `106`, name: `ubuntu 21`, key: `11 RON`, producerId: `14`},
  {id: `107`, name: `ubuntu 22`, key: `12 RON`, producerId: `14`},
  {id: `108`, name: `aplication`, key: `120 RON`, producerId: `18`},
  {id: `109`, name: `aplication 2.0`, key: `123 RON`, producerId: `18`},
  {id: `110`, name: `aplication 3.0`, key: `220 RON`, producerId: `18`},
]