/* eslint-disable prettier/prettier */

import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Grupo from './Grupo';
import { User } from './user';

@Entity({ name: 'ta_grupo_usuarios' })
export class GrupoUsuarioRelations {
    @PrimaryColumn({ name: 'cod_grupo' })
    @ManyToOne(() => Grupo)
    @JoinColumn({ name: 'cod_grupo', referencedColumnName: 'idGrupo' })
    grupo: Grupo;
  
    @PrimaryColumn({ name: 'cod_usuario' })
    @ManyToOne(() => User)
    @JoinColumn({ name: 'cod_usuario', referencedColumnName: 'idUsuario' })
    user: User;}
