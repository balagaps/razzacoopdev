export default {
  items: [
    // {
      // name: 'Dashboard',
      // url: '/dashboard',
      // icon: 'icon-speedometer',
      // badge: {
        // variant: 'info',
        // text: 'NEW',
      // },
    // },
    // {
      // title: true,
      // name: 'Theme',
      // wrapper: {            // optional wrapper object
        // element: '',        // required valid HTML5 element tag
        // attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      // },
      // class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    {
      name: 'DASHBOARD',
      url: '/dashboard',
      icon: 'fa fa-bar-chart',
    },
    {
      name: 'TRANSACTIONS',
      url: '/base',
      icon: 'fa fa-pencil-square-o',
      children: [
        {
          name: 'Cash Deposits',
          url: '/base/cashdeposits',
          //icon: 'icon-puzzle',
        },
        {
          name: 'Cash Withdrawal',
          url: '/base/cashwithdrawal',
          //icon: 'icon-puzzle',
        },
        {
          name: 'Loan Payment',
          url: '/base/loanpayment',
          //icon: 'icon-puzzle',
        },
        {
          name: 'Others',
          url: '/base/loanpayment',
          //icon: 'icon-puzzle',
        },
        {
          name: 'Reversals',
          url: '/base/loanpayment',
          //icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'REPORTS',
      url: '/base',
      icon: 'icon-list',
      children: [
        {
          name: 'Transaction Logs',
          url: '/base/transactionlogs',
          //icon: 'icon-puzzle',
        }
      ]
    }
  ],
};
