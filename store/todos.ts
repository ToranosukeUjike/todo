import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Todo, Option } from '~/models/Todo'

@Module({ stateFactory:true, namespaced:true, name: 'todos' })
export default class Todos extends VuexModule {
    todos: Todo[] = [
        {content: 'テスト', created: '2021-06-01', state: '作業前', stateId: 0},
        {content: 'コーディング', created: '2021-05-03', state: '作業中', stateId: 1},
        {content: '環境構築', created: '2021-04-12', state: '完了', stateId: 2},
    ]

    option: Option[] = [
        {id:0, label:'作業前'},
        {id:1, label:'作業中'},
        {id:2, label:'完了'}
    ]

    newState: number = 0;

    @Action
    ADD(e: any) { this.add(e) }

    @Action
    REMOVE(obj: Todo) { this.remove(obj) }

    @Action
    CHANGESTATE(obj: Todo) { this.changeState(obj) }

    @Mutation
    add(e:any) {
        let d: Date = new Date();
        let fmt: number | string = d.getFullYear() 
        + '-' + ('00' + (d.getMonth() + 1)).slice(-2) 
        + '-' + ('00' + d.getDate()).slice(-2)
        + ' ' + ('00' + d.getHours()).slice(-2)
        + ':' + ('00' + d.getMinutes()).slice(-2);

        this.todos.unshift({
            content: e,
            created: fmt,
            state: '作業前',
            stateId: 0
        })
    }

    @Mutation
    remove(obj: Todo) {
        for(let i=0; i<this.todos.length; i++) {
            const ob: Todo = this.todos[i];
            if(ob.content == obj.content && ob.created == obj.created) {
                if(confirm('' + ob.content + 'を削除しますか？')) {
                    this.todos.splice(i, 1);
                    return;
                }
            }
        }
    }
    
    @Mutation
    changeState(obj: Todo) {
        this.newState = obj.stateId;
        this.newState++;
        if (this.newState >= this.option.length) {
            this.newState = 0;
        }
        obj.state = this.option[this.newState].label;
        obj.stateId = this.option[this.newState].id;
        return;
    }
}