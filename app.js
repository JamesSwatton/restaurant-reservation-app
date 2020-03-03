new Vue({
    el: '#app',
    data: {
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
    methods: {
        makeBooking: function() {
            this.bookings.push(this.newBooking);
        }
    }
})
