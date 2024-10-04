document.getElementById('chamadoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroChamado = document.getElementById('numeroChamado').value;
    const cliente = document.getElementById('cliente').value;
    const responsavel = document.getElementById('responsavel').value;
    const problemaFisico = document.getElementById('problemaFisico').value;
    const softwareFirmware = document.getElementById('softwareFirmware').value;
    const descricao = document.getElementById('descricao').value;
    const atualizacoes = document.getElementById('atualizacoes').value;
    const status = document.getElementById('status').value;
    const dataAbertura = document.getElementById('dataAbertura').value; // Nova linha

    let problemaCor;
    if (problemaFisico === 'sim') {
        problemaCor = '🟢';
    } else {
        problemaCor = '🔴'; // Se não for físico
    }

    let softwareCor;
    if (softwareFirmware === 'sim') {
        softwareCor = '🟡';
    } else if (softwareFirmware === 'duvida') {
        softwareCor = '🟡'; // Se houver dúvida
    } else {
        softwareCor = '🔴'; // Se não for
    }

    const mensagem = `*Chamado Nº ${numeroChamado}*\n` +
        `Data de abertura: ${dataAbertura}\n` + // Atualizando a data de abertura
        `Cliente: *${cliente}*\n` +
        `Responsável pelo Atendimento: *${responsavel}*\n\n` +
        `*Especificando o setor do chamado*\n` +
        `O problema é físico? ${problemaCor}\n` +
        `O problema envolve software/firmware? ${softwareCor}\n\n` +
        `*Descrição do problema*\n` +
        `${descricao}\n\n` +
        `*Atualizações do chamado* 🔄\n` +
        `${atualizacoes}\n\n` +
        `*STATUS DO CHAMADO:* *${status === 'finalizado' ? 'FINALIZADO ✅' : 'EM ABERTO ⛔'}*`;

    // Copia a mensagem para a área de transferência
    navigator.clipboard.writeText(mensagem).then(() => {
        alert('Chamado copiado na área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });

    // Redireciona para o WhatsApp com a mensagem
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
});
