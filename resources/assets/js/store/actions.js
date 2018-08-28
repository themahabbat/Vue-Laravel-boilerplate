import axios from 'axios'

// ACTIONS ARE ASYNC AND CAN DO / COMMIT MULTIPLE MUTATIONS
export default {

    // MULTIPLE ACTIONS(JOBS) WITH JUST ONE MUTATION

    changeTitle({commit}, title) {
        commit('changeTitle', title)
    },

    clearTitle({commit}) {
        commit('changeTitle', '')
    },

    login({commit}, credentials) {

        return new Promise((resolve, reject) => {

            axios
                .post("/api/login", {
                    email: credentials.email,
                    password: credentials.password
                })
                .then(res => {
                    const token = res.data.access_token;
                    localStorage.setItem("access_token", token);
                    commit("login", token);

                    resolve(res)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })

        })


    },

    register({commit}, credentials) {

        return new Promise((resolve, reject) => {

            axios
                .post("/api/register", {
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password
                })
                .then(res => {
                    const token = res.data.access_token
                    localStorage.setItem("access_token", token)
                    commit("login", token)

                    resolve(res)
                })
                .catch(err => {
                    console.log(err)
                    reject(err.response.data)
                })

        })


    },


    logout(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

        if (context.getters.auth) {
            return new Promise((resolve, reject) => {

                axios
                    .post("/api/logout")
                    .then(res => {
                        localStorage.removeItem("access_token");
                        context.commit("logout");

                        resolve(res)
                    })
                    .catch(err => {
                        localStorage.removeItem("access_token");
                        context.commit("logout");
                        reject(err)
                    })

            })
        }
    }

}