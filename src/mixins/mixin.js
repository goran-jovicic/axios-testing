import { networkInterfaces } from "os";

export const mixin1 = {
    data () {
        return {
            user: ''
        }
    },
    created () {
        this.user = "Misa"
        console.log('Called from mixin 1')
    },

    methods : {
        getUserName() {
            alert('Vanja Bijalkovic')
        }
    }
}

export const mixin2 = {
    data () {
        return {
            user: ''
        }
    },
    created () {
        this.user = "Vanja"
        console.log('Called from mixin 2')
    }
}

export const mixin3 = {
    created () {
        this.user = "Vanja"
        console.log('Called from created 3')
    },
    mounted () {
        console.log('Called from moutned')
    }
}

export const mixin4 = {
    data () {
        return {
            date: new Date()
        }
    },

    methods : {
        getFormattedDate(date) {
            return new Intl.DateTimeFormat().format(date);
        }
    }
}