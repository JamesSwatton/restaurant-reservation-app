new Vue({
    el: '#app',
    data: {
        tables : {
            '1': {size: 2},
            '2': {size: 2},
            '3': {size: 4},
            '4': {size: 6},
            '5': {size: 4},
            '6': {size: 2},
        },
        bookings: [],
        newBooking: {
            firstName: '',
            lastName: '',
            phoneNum: '',
            partySize: '',
            tableNum: '',
            date: '',
            time: ''
        }
    },
    watch: {
        "newBooking.partySize": function() {
            if (this.newBooking.tableNum) {
                const tableSize = this.tables[this.newBooking.tableNum].size;
                console.log(tableSize);
                if (this.newBooking.partySize > tableSize) {
                    this.newBooking.tableNum = '';
                }
            }
        }
    },
    methods: {
        makeBooking: function() {
            this.bookings.push(this.newBooking);
        }
    }
})
