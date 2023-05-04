<script>

import axios from 'axios';

export default {
    name: 'CommentForm',

    data() {
        return {
            comment: {

                name: "",
                email: "",
                message: "",
            }
        }
    },

    props: {
        project_id: Number,
    },

    methods: {
        sendComment() {
            const comment = {
                project_id: this.project_id,
                name: this.comment.name,
                email: this.comment.email,
                message: this.comment.message,
            };

            //invio con axios
            axios.project('http://127.0.0.1:8000/api/comments', comment)
                .then((res) => { })
                ;
        }
    }

};
</script>

<template>
    <h2 class="text-muted">Invia il commento</h2>
    <form @submit.prevent="sendComment">

        <div class="row my-3">
            <div class="col-3 text-end">
                <label for="comment_name">Nome: </label>
            </div>
            <div class="col-9">
                <input type="text" v-model="name" id="comment_name">
            </div>
        </div>

        <div class="row my-3">
            <div class="col-3 text-end">
                <label for="comment_email">Email: </label>
            </div>
            <div class="col-9">
                <input type="email" v-model="email" id="comment_email">
            </div>
        </div>

        <div class="row my-3">
            <div class="col-3 text-end">
                <label for="comment_message">Message: </label>
            </div>
            <div class="col-9">
                <textarea v-model="message" id="comment_message"></textarea>
            </div>
        </div>

        <div class="row my-3">
            <div class="offset-3 col-9">
                <button type="submit" class="btn btn-primary">Invia</button>
            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>