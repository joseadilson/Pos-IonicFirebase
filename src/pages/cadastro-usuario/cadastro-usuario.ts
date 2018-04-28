import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {

  usuarioForm: FormGroup;
  home = HomePage;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, private authProvider:AuthProvider) {
  /* usamos o formbuilder para validar os campos aqui pode criar validadores customizados
      */
      this.usuarioForm = formBuilder.group({
        usuario: ['', Validators.required],
        senha: ['', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }

  salvarUsuario(){
    alert(this.usuarioForm);
    if (!this.usuarioForm.valid) {
      alert('preencha todos os campos');
    }
    else {
      this.authProvider.signupUser(this.usuarioForm.value.usuario,this.usuarioForm.value.senha);
      alert('salvo');
      this.voltarPagina();
    }
  }

  voltarPagina(){
    this.navCtrl.setRoot(HomePage);
  }
}
