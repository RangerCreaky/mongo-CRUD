<div class="taskMember">
                <h1> <%= task[0].title %></task> </h1>
                <p> <%= task[0].desc %> </p>
                <form action="/crud/markRead" method="post" class="buttonForm">
                    <% if ( task[0].status) { %>
                        <button class="btn blue" type="submit"> Mark read </button>
                    <% }else{ %>
                        <button class="btn blue" type="submit" disabled> Done reading </button>
                    <% } %>

                    <button formaction="/crud/delete" class="btn red" type="submit"> Delete </button>
                    <button formaction="/crud/update" class="btn green" type="submit"> Update </button>
                </form>
            </div>