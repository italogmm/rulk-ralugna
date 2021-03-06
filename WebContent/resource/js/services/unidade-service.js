var app = angular.module('rulk-unidade-service', [ 'rulk-restangular-config' ]);

app.factory('UnidadeService', [
		'Restangular',
		function(Restangular) {
			return {
				objRest : Restangular.all('unidades'),
				post : function(unidade) {
					this.objRest.post(unidade).then(function(resp) {
						window.alert('deu certo');
					}, function(err) {
						window.alert('deu erro');
					});
				},
				getUnidadesDisponiveis : function() {
					return this.objRest.getList();
				},
				getPlanosDisponiveis : function(unidade, callback) {
					Restangular.one('unidades', unidade.id).getList('planos')
							.then(callback, function(err) {
								window.alert("erro");
							});
				},
				salvarUnidade: function(unidade) {
					return this.objRest.post(unidade);
				},
				obterPorIdUnidade: function(idUnidade) {
					return Restangular.one('unidades', idUnidade).get();
				}
			}
		} ]);