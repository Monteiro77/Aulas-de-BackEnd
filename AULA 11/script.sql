#Retorna todos os databases existentes
show databases;

#cria um database no banco de dados
create database db_lion_school_turma_tarde;

#Seleciona o database a ser selecionado
use db_lion_school_turma_tarde;

#mostra todas as tabelas presentes na entidade, 
#só é possível usar o show tabbles depois do use
show tables;

#cria a tabela de aluno
create table tbl_aluno (
 id int not null auto_increment primary key,
 nome varchar(100) not null,
 rg varchar(15) not null,
 cpf varchar(18) not null,
 data_nascimento date not null,
 email varchar(200) not null,
 unique index (id)
);

#mostra as informações de dentro da tabela
desc tbl_aluno;

#Insere dados na tabela aluno
insert into tbl_aluno (
 nome,
 rg,
 cpf,
 data_nascimento,
 email
 )
values (
 'Mtz 愛',
 '57.260.063-X',
 '573807228-05',
 '2005-09-24',
 'mtztoostrong@gmail.com'
 );
 
 
 select * from tbl_aluno;


insert into tbl_aluno (
 nome,
 rg,
 cpf,
 data_nascimento,
 email
 )
values (
 'Alv 愛',
 '686.654.67-4',
 '484.885.688.43',
 '2005-04-10',
 'alvcarecao@gmail.com'
 );
 
  select * from tbl_aluno;
  
  #atualiza dados na tabela (não esquecer do criterio)
  update tbl_aluno set email = 'alvcabeludo@gmail.com' where id = 2;
  
  delete from tbl_aluno where id = 2;
