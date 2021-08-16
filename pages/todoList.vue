<template>
  <section class="container">
    <h1>Todoリスト</h1>
    <div class="addArea">
      <input type="text" name="addName" v-model="e" placeholder="タスクを入力してください">
      <v-btn class="button button--green" @click="addTodo(e)">追加</v-btn>
      <p>Message is: {{ e }}</p>
    </div>
    <div class="Filter">
        <v-btn class="button button--gray" v-bind:class="{'is-active':(!find_flg)}" @click="flag_reset">全て</v-btn>
        <v-btn class="button button--gray" v-bind:class="{'is-active':find_flg && (find_state == '作業前')}" @click="find('作業前')">作業前</v-btn>
        <v-btn class="button button--gray" v-bind:class="{'is-active':find_flg && (find_state == '作業中')}" @click="find('作業中')">作業中</v-btn>
        <v-btn class="button button--gray" v-bind:class="{'is-active':find_flg && (find_state == '完了')}" @click="find('完了')">完了</v-btn>
    </div>
    <table class="Lists">
        <thead>
            <tr>
                <th>タスク</th>
                <th>登録日時</th>
                <th>状態</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in display_todos" :key="i">
                <td>{{ item.content }}</td>
                <td>{{ item.created }}</td>
                <td>
                    <v-btn class="button" @click="changeState(item)">{{ item.state }}</v-btn>
                </td>
                <td><v-btn class="button button--delete" @click="remove(item)">削除</v-btn></td>
            </tr>
        </tbody>
    </table>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { todosStore } from '~/store'
import { Todo } from '~/models/Todo'

@Component({})
export default class Todos extends Vue {
    e: string|number = ''
    content: string = ''
    find_state: string = ''
    find_flg: boolean = false

    get todos(): Todo[] {
        return todosStore.todos
    }

    get display_todos() {
        if(this.find_flg) {
            // let arr: Todo[] = [];
            // let data = this.todos;
            // data.forEach(element => {
            //     if (element.state == this.find_state) {
            //         arr.push(element);
            //     }
            // });
            // return arr;

            // 1行で書ける
            return this.todos.filter((item) => item.state === this.find_state);
        } else {
            return this.todos;
        }
    }

    addTodo() {
        if (this.e != '') {
            todosStore.ADD(this.e)
            this.e = ''
        }
    }

    remove(item: any) {
        todosStore.REMOVE(item)
    }

    changeState(item: any) {
        todosStore.CHANGESTATE(item)
    }

    find(findState: string) {
        this.find_state = findState;
        this.find_flg = true;
    }

    // タイポしてる
    // flag_rest() {
    //     console.log('in')
    //     this.find_flg = false;
    // }
    flag_reset() {
        this.find_flg = false;
    }
}
</script>
<style>
.container {
    text-align: center;
}
</style>
