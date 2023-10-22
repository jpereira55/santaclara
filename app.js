const selector = (element) => document.querySelector(element);


pdvsJson.map((pdv) => {
  const pdvsclone = selector('.link').cloneNode(true);
    selector('.pdv-area').append(pdvsclone);

    pdvsclone.querySelector('.link a').href = pdv.link ;
    pdvsclone.querySelector('.card img').src = pdv.img;
    pdvsclone.querySelector('.card h2').innerHTML = pdv.name;
    pdvsclone.querySelector('.card p').innerHTML = pdv.descripion;


    }
    if(pdv.descripion === 'Preferencial') {
      pdvsclone.querySelector('.card').style.background = '#8B0000';
    }
    if(pdv.descripion === 'Super Drive') {
      pdvsclone.querySelector('.card').style.background = '#004b23';
    }
    if(pdv.descripion === 'Padaria') {
      pdvsclone.querySelector('.card').style.background = '#D83006';
    }
    if(pdv.descripion === 'RESERVA') {
      pdvsclone.querySelector('.card').style.background = '#D83006';
    }
 
});
