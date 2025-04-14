import React from 'react';

const FooterMap = () => {
    const handleOpenMap = () => {
        // Координаты ДПК
        const lat = 48.007421;
        const lon = 37.809066;
        // Улучшенный URL с меткой, правильным масштабом и центром на ДПК
        const mapUrl = `https://yandex.ru/maps/?ll=${lon},${lat}&z=17&mode=whatshere&whatshere[point]=${lon},${lat}&whatshere[text]=ДПК,%20Донецкий%20политехнический%20колледж`;

        window.open(mapUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="footer__column footer__map">
            <div
                className="footer-map-placeholder"
                onClick={handleOpenMap}
                style={{
                    backgroundImage: `url('https://static-maps.yandex.ru/1.x/?ll=37.803211,48.005153&size=600,450&z=16&l=map&pt=37.803211,48.005153,comma')`
                }}
            >
                <div className="footer-map-info">
                    <p className="footer-map-info__address">
                        ДПК, г. Донецк, ул. Челюскинцев, д. 159
                    </p>
                    <p className="footer-map-info__hint">
                        Нажмите для открытия интерактивной карты
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterMap;