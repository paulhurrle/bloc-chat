(function() {
    function UserModalCtrl($uibModalInstance) {

        this.blocChatCurrentUser = '';

        this.setUser = function (user) {
            currentUser = this.blocChatCurrentUser;
            if (currentUser !== '') {
                $uibModalInstance.close(user);
            }
        };
    }

    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$uibModalInstance', UserModalCtrl]);
})();
