import { createPool } from '@vercel/postgres';

async function query(rota, dados) {
  if (!process.env.POSTGRES_URL) {
    return { error: 'Variável de ambiente POSTGRES_URL não definida' };
  }

  const pool = createPool({
    connectionString: process.env.POSTGRES_URL,
  });

  console.log('Pool de conexão PostgreSQL criado com sucesso.');

  try {
    if (rota === 'monitoramento') {

        return {data: ''}

    }

    //aqui faz as consultas no banco de dados.
    //crie uma rota e para consumir informe o nome no request


  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    return { error: 'Erro interno do servidor' };
  } finally {
    await pool.end();
  }
}

async function consulta(rota, dados) {
  try {
    const resultado = await query(rota, dados);
    console.log('Consulta result:', resultado);
    return resultado;
  } catch (error) {
    console.error('Erro na consulta:', error);
    throw error; // Rejogue o erro para que ele seja capturado pelo caller (quem chama a função)
  }
}

export default consulta;