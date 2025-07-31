// SCRIPTS DEL CHATBOT
  
    // Muestra u oculta el chatbot
    function toggleChatbot() {
      const bot = document.getElementById('chatbot');
      bot.style.display = bot.style.display === 'none' || bot.style.display === '' ? 'block' : 'none';
    }

    // Opción inicial para elegir producto
    function seleccionarProducto() {
      document.getElementById("botResponse").innerHTML = `
        <p><strong>¿Qué deseas pedir?</strong></p>
        <button class="chatbot-button secondary" onclick="pedidoHamburguesa()">🍔 Hamburguesa</button>
        <button class="chatbot-button secondary" onclick="pedidoAlitas()">🍗 Alitas BBQ</button>
        <button class="chatbot-button secondary" onclick="pedidoSalchipapas()">🍟 Salchipapas</button>
        <button class="chatbot-button secondary" onclick="pedidoBroaster()">🍗 Pollo Broaster</button>
      `;
    }

    // Opciones para hamburguesa
    function pedidoHamburguesa() {
      document.getElementById("botResponse").innerHTML = `
        <p><strong>🍔 Hamburguesa</strong></p>
        <p>Tipo de carne:</p>
        <select id="tipoCarne">
          <option>Carne</option>
          <option>Pollo</option>
          <option>Chorizo</option>
        </select>
        <p>Cremas:</p>
        <div id="cremas">
          <label><input type="checkbox" value="Mayonesa"> Mayonesa</label>
          <label><input type="checkbox" value="Ketchup"> Ketchup</label>
          <label><input type="checkbox" value="Mostaza"> Mostaza</label>
          <label><input type="checkbox" value="Ají"> Ají</label>
          <label><input type="checkbox" value="BBQ"> BBQ</label>
        </div>
        <p>Tipo de papas:</p>
        <select id="papas">
          <option>Normales</option>
          <option>Hilo</option>
        </select>
        <button class="chatbot-button secondary" onclick="enviarPedidoHamburguesa()">✅ Confirmar pedido</button>
      `;
    }

    // Enviar pedido de hamburguesa a WhatsApp
    function enviarPedidoHamburguesa() {
      const carne = document.getElementById("tipoCarne").value;
      const papas = document.getElementById("papas").value;
      const cremaCheckboxes = document.querySelectorAll('#cremas input[type=checkbox]:checked');
      const cremas = Array.from(cremaCheckboxes).map(cb => cb.value).join(', ');
      const mensaje = `🍔 *Hola! Quiero pedir una Hamburguesa*:\n\n🍖 *Tipo de carne:* ${carne}\n🥫 *Cremas:* ${cremas}\n🍟 *Papas:* ${papas}\n\n📍Gracias 😋`;

      window.open(`https://wa.me/51932721373?text=${encodeURIComponent(mensaje)}`, '_blank');
    }

    // Opciones para alitas
    function pedidoAlitas() {
      document.getElementById("botResponse").innerHTML = `
        <p><strong>🍗 Alitas BBQ</strong></p>
        <p>Tipo de salsa:</p>
        <select id="salsaAlitas">
          <option>BBQ</option>
          <option>Picante</option>
          <option>Crispy</option>
          <option>Acevichadas</option>
        </select>
        <p>Cremas:</p>
        <div id="cremasSalchi">
          <label><input type="checkbox" value="Mayonesa"> Mayonesa</label>
          <label><input type="checkbox" value="Ketchup"> Ketchup</label>
          <label><input type="checkbox" value="Mostaza"> Mostaza</label>
          <label><input type="checkbox" value="Ají"> Ají</label>
          <label><input type="checkbox" value="BBQ"> BBQ</label>
        </div>
        <button class="chatbot-button secondary" onclick="enviarPedidoAlitas()">✅ Confirmar pedido</button>
      `;
    }

    // Enviar pedido de alitas a WhatsApp
    function enviarPedidoAlitas() {
      const salsa = document.getElementById("salsaAlitas").value;
      const cremaCheckboxes = document.querySelectorAll('#cremasSalchi input[type=checkbox]:checked');
      const cremas = Array.from(cremaCheckboxes).map(cb => cb.value).join(', ');
      const mensaje = `🍗 *Hola! Quiero pedir Alitas*:\n\n🔥 *Salsa:* ${salsa}\n🥫 *Cremas:* ${cremas}\n\n📍¡Gracias! 😋`;

      window.open(`https://wa.me/51932721373?text=${encodeURIComponent(mensaje)}`, '_blank');
    }

    // Opciones para salchipapas
    function pedidoSalchipapas() {
      document.getElementById("botResponse").innerHTML = `
        <p><strong>🍟 Salchipapas</strong></p>
        <p>Tamaño:</p>
        <select id="tamanoSalchi">
          <option>Clasica</option>
          <option>Royal</option>
        </select>
        <p>Cremas:</p>
        <div id="cremasSalchi">
          <label><input type="checkbox" value="Mayonesa"> Mayonesa</label>
          <label><input type="checkbox" value="Ketchup"> Ketchup</label>
          <label><input type="checkbox" value="Mostaza"> Mostaza</label>
          <label><input type="checkbox" value="Ají"> Ají</label>
          <label><input type="checkbox" value="BBQ"> BBQ</label>
        </div>
        <button class="chatbot-button secondary" onclick="enviarPedidoSalchi()">✅ Confirmar pedido</button>
      `;
    }

    // Enviar pedido de salchipapas a WhatsApp
    function enviarPedidoSalchi() {
      const tamano = document.getElementById("tamanoSalchi").value;
      const cremaCheckboxes = document.querySelectorAll('#cremasSalchi input[type=checkbox]:checked');
      const cremas = Array.from(cremaCheckboxes).map(cb => cb.value).join(', ');
      const mensaje = `🍟 *Hola! Quiero pedir unas Salchipapas*:\n\n📏 *Tamaño:* ${tamano}\n🥫 *Cremas:* ${cremas}\n\n📍¡Gracias! 😋`;

      window.open(`https://wa.me/51932721373?text=${encodeURIComponent(mensaje)}`, '_blank');
    }


    // Opciones para pollo broaster
    function pedidoBroaster() {
      document.getElementById("botResponse").innerHTML = `
        <p><strong>🍗Pollo Broaster</strong></p>
        <p>Presa:</p>
        <select id="presa">
          <option>Pierna</option>
          <option>Pecho</option>
        </select>
        <p>Cremas:</p>
        <div id="cremasBroaster">
          <label><input type="checkbox" value="Mayonesa"> Mayonesa</label>
          <label><input type="checkbox" value="Ketchup"> Ketchup</label>
          <label><input type="checkbox" value="Mostaza"> Mostaza</label>
          <label><input type="checkbox" value="Ají"> Ají</label>
          <label><input type="checkbox" value="BBQ"> BBQ</label>
        </div>
        <button class="chatbot-button secondary" onclick="enviarPedidoBroaster()">✅ Confirmar pedido</button>
      `;
    }

    // Enviar pedido de salchipapas a WhatsApp
    function enviarPedidoBroaster() {
      const presa = document.getElementById("presa").value;
      const cremaCheckboxes = document.querySelectorAll('#cremasBroaster input[type=checkbox]:checked');
      const cremas = Array.from(cremaCheckboxes).map(cb => cb.value).join(', ');
      const mensaje = `🍗 *Hola! Quiero pedir un Pollo Broaster*:\n\n🍖 *Presa:* ${presa}\n🥫 *Cremas:* ${cremas}\n\n📍¡Gracias! 😋`;
      window.open(`https://wa.me/51932721373?text=${encodeURIComponent(mensaje)}`, '_blank');
    }
  