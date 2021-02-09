import {Math} from '@sub-folder3/sum'



describe('Should test math class', ()=>{
    test('Should return right sum when sum method is called', ()=>{
        const sut = new Math() 
        const response = sut.sum(2,2)
        expect(response).toBe(4)       
    })
})