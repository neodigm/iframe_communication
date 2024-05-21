class MWInject {// mw_inject.js
    static init(){
        this.elInp = document.querySelector("#root > div > div > div.MuiGrid-root.jss5478.MuiGrid-container.MuiGrid-item.MuiGrid-direction-xs-column > div > div > div > div > div.jss5534.fs-exclude > div.MuiInputBase-root.MuiOutlinedInput-root.jss5530.MuiInputBase-formControl.MuiInputBase-multiline.MuiOutlinedInput-multiline.MuiInputBase-adornedEnd.MuiOutlinedInput-adornedEnd > textarea:nth-child(1)")
        this.elSend = document.querySelector("#root > div > div > div.MuiGrid-root.jss5478.MuiGrid-container.MuiGrid-item.MuiGrid-direction-xs-column > div > div > div > div > div.jss5534.fs-exclude > div.MuiInputBase-root.MuiOutlinedInput-root.jss5530.MuiInputBase-formControl.MuiInputBase-multiline.MuiOutlinedInput-multiline.MuiInputBase-adornedEnd.MuiOutlinedInput-adornedEnd > div > button")
        if( !this.elInp ){
            this.elInp = document.querySelector("#prompt__input--id")
            this.elSend = document.querySelector("#send__btn--id")
        }
        if( !this.elInp ) console.log(" ~~~ cannot bind ~~~ ")
        return this
    }
    static tick(){
        let params = new URLSearchParams(document.location.search)
        let SearchA4S = params.get("A4S")
        if( SearchA4S ){
            this.elInp.value = SearchA4S
            this.elSend.click()
        }
        console.log(" ~~~ tick prompt SearchA4S ~~~ " + SearchA4S )
        console.log(" ~~~ tick prompt input ~~~ " + this.elInp.value )
        if( this.elInp ) setTimeout( ()=>{ MWInject.tick() }, 3e3 )
        return this
    }
}
setTimeout( ()=>{ MWInject.init().tick() }, 3e3 )