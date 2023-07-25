import { Table, TableHeader, TableRow } from '../model/table.model';

const headerTable: TableHeader[] = [
  {
    name: 'location',
    translatedName: 'location',
  },
  {
    name: 'country',
    translatedName: 'country',
  },
  {
    name: 'manager',
    translatedName: 'manager',
  },
  {
    name: 'car',
    translatedName: 'car',
  },
  {
    name: 'price',
    translatedName: 'price',
  },
  {
    name: 'opponent',
    translatedName: 'opponent',
  },
  {
    name: 'risk',
    translatedName: 'risk',
  },
  {
    name: 'time',
    translatedName: 'time',
  },
];

const tableRows: TableRow[] = [
  {
    fields: {
      location: {
        id: 'zxcvbnmsadsadsa',
        name: 'KolnKolnKol',
        icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
        editable: false,
        status: { hasStatus: true, color: null },
      },
      manager: {
        id: 'zxcvbnmfhgfjfg',
        name: 'John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe',
        icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
        editable: false,
        status: { hasStatus: true, color: null },
      },
      country: {
        id: 'zxcvbnmbldffdogfdk',
        name: 'Germany',
        icon: null,
        editable: true,
        status: { hasStatus: true, color: null },
      },
      car: {
        id: 'zxcvbnmbldffdogfdk111',
        name: 'Ferrari',
        icon: null,
        editable: true,
        status: { hasStatus: false, color: null },
      },
      price: {
        id: 'zxcvbnmbldffdogfdk2',
        name: 'Ferrari',
        icon: null,
        editable: true,
        status: { hasStatus: false, color: null },
      },
      opponent: {
        id: 'zxcvbnmbldffdogfdkdfffcxc',
        name: 'John EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn EnduroJohn Enduro',
        icon: null,
        editable: true,
        status: { hasStatus: false, color: null },
      },
      risk: {
        id: 'zxcvbnmbldff323dogfdk',
        name: 'no',
        icon: null,
        editable: true,
        status: { hasStatus: false, color: null },
      },
      time: {
        id: 'zxcvbnmbldffdogfd12321k',
        name: '10:00:00',
        icon: null,
        editable: true,
        status: { hasStatus: false, color: null },
      },
    },
    id: '123456',
    parentId: null,
    children: {
      headers: [
        {
          name: 'prize',
          translatedName: 'prize',
        },
        {
          name: 'money',
          translatedName: 'money',
        },
        {
          name: 'bonus',
          translatedName: 'bonus',
        },
      ],
      rows: [
        {
          id: '6543321',
          parentId: '123456',
          fields: {
            prize: {
              id: 'zxcvbnm1',
              name: 'cash',
              icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
              editable: false,
              status: { hasStatus: true, color: null },
            },
            bonus: {
              id: 'zxcvbnm2',
              name: 'Jill Valentine',
              icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
              editable: false,
              status: { hasStatus: true, color: null },
            },
            money: {
              id: 'zxcvbnm3',
              name: '500',
              icon: null,
              editable: false,
              status: { hasStatus: true, color: null },
            },
          },
          children: {
            headers: [
              {
                name: 'prize',
                translatedName: 'prize',
              },
              {
                name: 'money',
                translatedName: 'money',
              },
              {
                name: 'bonus',
                translatedName: 'bonus',
              },
            ],
            rows: [
              {
                fields: {
                  prize: {
                    id: 'zxcvbnm[',
                    name: 'Venice',
                    icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
                    editable: false,
                    status: { hasStatus: true, color: null },
                  },
                  money: {
                    id: 'zxcvbnmdss',
                    name: 'Jill Valentine',
                    editable: false,
                    icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
                    status: { hasStatus: true, color: null },
                  },
                  bonus: {
                    id: 'zxcvbnmvg',
                    name: 'Italy',
                    icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
                    editable: false,
                    status: { hasStatus: true, color: null },
                  },
                },
                id: '65433217',
                parentId: '6543321',
                children: null,
                selectable: false,
                editOptions: ['raz', 'dva', 'tree'],
              },
            ],
          },
          selectable: false,
          editOptions: ['raz', 'dva'],
        },
        {
          fields: {
            prize: {
              id: 'zxcvbnm22222',
              name: 'Venice',
              icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
              editable: false,
              status: { hasStatus: true, color: null },
            },
            bonus: {
              id: 'zxcvbnmqqqqqqdsd',
              name: 'Jill Valentine',
              editable: false,
              icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
              status: { hasStatus: true, color: null },
            },
            money: {
              id: 'zxcvbnmqqqqqq',
              name: 'Italy',
              icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
              editable: false,
              status: { hasStatus: true, color: null },
            },
          },
          id: '65433213',
          parentId: '123456',
          children: null,
          selectable: false,
          editOptions: ['raz', 'dva'],
        },
      ],
    },
    selectable: false,
    editOptions: ['raz', 'dva'],
  },
  {
    fields: {
      location: {
        id: 'zxcvbnmaaaaa',
        name: 'Venice',
        icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
        editable: false,
        status: { hasStatus: true, color: null },
      },
      manager: {
        id: 'zxcvbnmbbbb',
        name: 'Jill Valentine',
        editable: false,
        icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
        status: { hasStatus: true, color: null },
      },
      country: {
        id: 'zxcvbnmcccccc',
        name: 'Italy',
        icon: 'https://cdn-icons-png.flaticon.com/512/187/187879.png',
        editable: false,
        status: { hasStatus: true, color: null },
      },
    },
    id: '6543321xzxzcwdq',
    parentId: null,
    children: null,
    selectable: false,
    editOptions: ['raz', 'dva', 'tree'],
  },
];

export const table: Table = {
  headers: headerTable,
  rows: tableRows,
};
